# Supabase Contact Form Setup Guide

This guide will help you set up Supabase database integration and email notifications for your contact form.

## Prerequisites

1. A Supabase account (free at [supabase.com](https://supabase.com))
2. A Resend account (free at [resend.com](https://resend.com)) for email notifications

## Step 1: Set up Supabase Database

1. **Create a new Supabase project:**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose your organization and enter project details
   - Wait for the project to be created

2. **Create the database table:**
   - Go to your Supabase dashboard
   - Navigate to "SQL Editor"
   - Copy and paste the contents of `supabase-schema.sql`
   - Click "Run" to execute the SQL

3. **Get your Supabase credentials:**
   - Go to "Settings" → "API"
   - Copy your "Project URL" and "anon public" key

## Step 2: Set up Resend for Email Notifications

1. **Create a Resend account:**
   - Go to [resend.com](https://resend.com)
   - Sign up for a free account
   - Verify your email address

2. **Get your API key:**
   - Go to "API Keys" in your Resend dashboard
   - Click "Create API Key"
   - Give it a name (e.g., "Portfolio Contact Form")
   - Copy the API key

3. **Verify your domain (optional but recommended):**
   - Go to "Domains" in your Resend dashboard
   - Add your domain for better email deliverability
   - Follow the DNS verification steps

## Step 3: Configure Environment Variables

1. **Create a `.env.local` file in your project root:**
   ```bash
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Resend API Key (for email notifications)
   RESEND_API_KEY=your_resend_api_key

   # Your email address (where contact form messages will be sent)
   CONTACT_EMAIL=shozabb.work@gmail.com
   ```

2. **Replace the placeholder values:**
   - `your_supabase_project_url`: Your Supabase project URL
   - `your_supabase_anon_key`: Your Supabase anon key
   - `your_resend_api_key`: Your Resend API key
   - Update `CONTACT_EMAIL` to your preferred email address

## Step 4: Test the Integration

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test the contact form:**
   - Navigate to your contact section
   - Fill out the form with test data
   - Submit the form
   - Check that you receive:
     - A success message on the website
     - An email notification in your inbox
     - A confirmation email sent to the form submitter

## Step 5: Monitor Messages (Optional)

You can view submitted messages in your Supabase dashboard:

1. Go to "Table Editor" in your Supabase dashboard
2. Select the `contact_messages` table
3. View all submitted contact form messages
4. Update the `status` field to track which messages you've read/replied to

## Features Included

✅ **Database Storage**: All contact form submissions are stored in Supabase
✅ **Email Notifications**: You receive an email when someone submits the form
✅ **Auto-Reply**: Form submitters receive a confirmation email
✅ **Form Validation**: Client-side and server-side validation
✅ **Loading States**: Visual feedback during form submission
✅ **Error Handling**: Proper error messages for failed submissions
✅ **Security**: Row Level Security (RLS) enabled on the database

## Troubleshooting

### Common Issues:

1. **"Failed to save message" error:**
   - Check your Supabase credentials in `.env.local`
   - Ensure the database table was created successfully
   - Check the Supabase logs for detailed error messages

2. **Email not sending:**
   - Verify your Resend API key is correct
   - Check your Resend account for any issues
   - Ensure the `CONTACT_EMAIL` environment variable is set

3. **CORS errors:**
   - Make sure your Supabase project allows requests from your domain
   - Check that your environment variables are properly set

### Getting Help:

- Check the browser console for client-side errors
- Check your terminal/server logs for server-side errors
- Review the Supabase logs in your dashboard
- Check the Resend dashboard for email delivery issues

## Security Notes

- The database uses Row Level Security (RLS)
- Only anonymous users can insert new messages
- Authenticated users can read and update messages
- Email addresses are validated before saving
- All form data is sanitized before processing

## Next Steps

Consider adding these features:
- Admin dashboard to manage messages
- Message status tracking
- Email templates customization
- Spam protection (reCAPTCHA)
- Message search and filtering
