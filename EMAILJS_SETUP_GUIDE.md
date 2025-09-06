# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions directly to your email.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. **Copy the Template ID** (you'll need this later)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. **Copy your Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const emailjsConfig = {
  serviceId: 'your_actual_service_id_here',
  templateId: 'your_actual_template_id_here', 
  publicKey: 'your_actual_public_key_here',
  toEmail: 'egbeyemiolamilekan@gmail.com'
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email for the message

## Features Included

✅ **Form Validation**: All fields are required
✅ **Loading State**: Button shows "Sending..." while processing
✅ **Success Message**: Green confirmation when email is sent
✅ **Error Handling**: Red error message if sending fails
✅ **Form Reset**: Form clears after successful submission
✅ **Mobile Responsive**: Works perfectly on all devices

## Troubleshooting

- **"Service not found"**: Check your Service ID
- **"Template not found"**: Check your Template ID  
- **"Invalid public key"**: Check your Public Key
- **Emails not received**: Check spam folder and email service setup

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to use in frontend code

## Free Tier Limits

- 200 emails per month
- Perfect for personal portfolio sites
- Upgrade if you need more emails
