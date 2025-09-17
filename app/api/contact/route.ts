import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const resend = new Resend(resendApiKey)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Use a server-side Supabase client with the service role key to bypass RLS
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { error: 'Supabase server credentials are not configured' },
        { status: 500 }
      )
    }

    const serverSupabase = createClient(supabaseUrl, serviceRoleKey)

    // Insert into Supabase database
    const { data, error } = await serverSupabase
      .from('contact_messages')
      .insert([
        {
          name,
          email,
          subject,
          message,
          status: 'new'
        }
      ])
      .select()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      )
    }

    // Send email notification
    const emailResults: { admin?: unknown; user?: unknown; error?: unknown } = {}
    try {
      if (!resendApiKey) {
        throw new Error('RESEND_API_KEY is not configured')
      }

      const adminSendResult = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [process.env.CONTACT_EMAIL || 'shozabb.work@gmail.com'],
        replyTo: email,
        subject: `New Contact Form Message: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              New Contact Form Message
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Message Details</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="background-color: #e9ecef; padding: 15px; border-radius: 4px; font-size: 14px; color: #6c757d;">
              <p><strong>Reply to:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
        text: `New Contact Form Message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
      })
      emailResults.admin = adminSendResult

      // Send confirmation email to the user
      const userSendResult = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [email],
        subject: 'Thank you for your message!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Thank you for reaching out!</h2>
            
            <p>Hi ${name},</p>
            
            <p>Thank you for your message. I've received your contact form submission and will get back to you as soon as possible.</p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Your Message</h3>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #28a745;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <p>Best regards,<br>Shozab Mehdi</p>
            
            <div style="background-color: #e9ecef; padding: 15px; border-radius: 4px; font-size: 14px; color: #6c757d; margin-top: 20px;">
              <p>This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        `
      })
      emailResults.user = userSendResult

    } catch (emailError) {
      console.error('Email error:', emailError)
      emailResults.error = (emailError as Error).message ?? emailError
      // Don't fail the request if email fails, just log it
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!',
        data,
        email: process.env.NODE_ENV !== 'production' ? emailResults : undefined
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
