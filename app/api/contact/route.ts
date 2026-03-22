import { NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"
import nodemailer from "nodemailer"

const MONGODB_URI = process.env.MONGODB_URI!
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com"
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587
const SMTP_USER = process.env.SMTP_USER!
const SMTP_PASS = process.env.SMTP_PASS!
const CONTACT_EMAIL = process.env.CONTACT_EMAIL!

let cachedClient: MongoClient | null = null

async function getMongoClient() {
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

    if (!MONGODB_URI) {
      return NextResponse.json({ error: "Database not configured" }, { status: 500 })
    }

    const client = await getMongoClient()
    const db = client.db("portfolio")

    await db.collection("contact_messages").insertOne({
      name,
      email,
      subject,
      message,
      status: "new",
      createdAt: new Date(),
    })

    if (SMTP_USER && SMTP_PASS && CONTACT_EMAIL) {
      try {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: SMTP_PORT,
          secure: SMTP_PORT === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        })

        await transporter.sendMail({
          from: `"Portfolio Contact" <${SMTP_USER}>`,
          to: CONTACT_EMAIL,
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
      } catch (emailErr) {
        console.error("Email notification failed:", emailErr)
      }
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
