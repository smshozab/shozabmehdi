import { NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"
import nodemailer from "nodemailer"

const DEFAULT_CONTACT_EMAIL = "shozabmehdi89@gmail.com"
const MONGODB_URI = process.env.MONGODB_URI?.trim()
const SMTP_HOST = (process.env.SMTP_HOST || "smtp.gmail.com").trim()
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587

/** Gmail app passwords must match SMTP_USER's Google account; strip spaces/newlines from Vercel env. */
function getSmtpConfig() {
  const user = process.env.SMTP_USER?.trim() || DEFAULT_CONTACT_EMAIL
  const pass = process.env.SMTP_PASS?.trim().replace(/\s+/g, "")
  const to = DEFAULT_CONTACT_EMAIL
  return { user, pass, to }
}

let cachedClient: MongoClient | null = null

async function getMongoClient() {
  if (!MONGODB_URI) throw new Error("Database not configured")

  if (cachedClient) {
    try {
      await cachedClient.db("admin").command({ ping: 1 })
      return cachedClient
    } catch {
      cachedClient = null
    }
  }
  cachedClient = await new MongoClient(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  }).connect()
  return cachedClient
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const { user: smtpUser, pass: smtpPass, to: contactTo } = getSmtpConfig()
    if (!smtpPass) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 503 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      requireTLS: SMTP_PORT === 587,
      auth: { user: smtpUser, pass: smtpPass },
      connectionTimeout: 15_000,
      greetingTimeout: 15_000,
      socketTimeout: 30_000,
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
          <h2 style="border-bottom:2px solid #333;padding-bottom:8px">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left:3px solid #ccc;padding-left:12px;color:#444">
            ${message.replace(/\n/g, "<br>")}
          </blockquote>
          <hr style="margin-top:24px">
          <p style="font-size:13px;color:#888">Received: ${new Date().toLocaleString()}</p>
        </div>`,
    })

    if (MONGODB_URI) {
      try {
        const client = await getMongoClient()
        await client.db("portfolio").collection("contact_messages").insertOne({
          name,
          email,
          subject,
          message,
          status: "new",
          createdAt: new Date(),
        })
      } catch (databaseError) {
        console.error("Contact message storage failed:", databaseError)
      }
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
      message: "Message sent successfully!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
