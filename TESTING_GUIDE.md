# EmailJS Testing Guide

## Testing Options

You can test EmailJS integration in **both development and production** environments. Here's how:

## Option 1: Test Locally (Development)

### Prerequisites:
1. Complete EmailJS setup (follow EMAILJS_SETUP_GUIDE.md)
2. Update `src/config/emailjs.js` with your actual credentials
3. Start your development server

### Steps:
1. **Start Development Server:**
   ```bash
   npm run dev
   ```

2. **Open Browser:**
   - Go to `http://localhost:5173` (or your dev server URL)
   - Navigate to the Contact page

3. **Test the Form:**
   - Fill out all fields with test data
   - Click "Send Message"
   - Check for success/error messages
   - Check your email inbox

### What to Look For:
- ✅ **Success**: Green message "Message sent successfully!"
- ❌ **Error**: Red message with error details
- 📧 **Email**: Check your inbox for the test message

## Option 2: Test After Deployment

### Deploy Your Site:
1. **Deploy to Vercel/Netlify/GitHub Pages:**
   ```bash
   # For Vercel
   npm run build
   vercel --prod
   
   # For Netlify
   npm run build
   # Upload dist folder to Netlify
   ```

2. **Test on Live Site:**
   - Visit your deployed website
   - Go to Contact page
   - Submit the form
   - Check your email

## Common Testing Scenarios

### 1. Valid Form Submission
```
Name: John Doe
Email: john@example.com
Message: This is a test message from your portfolio contact form.
```
**Expected Result**: Success message + email received

### 2. Invalid Email Format
```
Name: John Doe
Email: invalid-email
Message: Test message
```
**Expected Result**: Red error "Email is invalid"

### 3. Empty Fields
```
Name: (empty)
Email: (empty)
Message: (empty)
```
**Expected Result**: Red errors for each empty field

### 4. Short Message
```
Name: John Doe
Email: john@example.com
Message: Hi
```
**Expected Result**: Red error "Message must be at least 10 characters"

## Debugging Tips

### Check Browser Console:
1. Open Developer Tools (F12)
2. Go to Console tab
3. Submit the form
4. Look for error messages or success logs

### Common Issues:

#### 1. "Service not found"
- **Cause**: Wrong Service ID
- **Fix**: Check your EmailJS dashboard for correct Service ID

#### 2. "Template not found"
- **Cause**: Wrong Template ID
- **Fix**: Check your EmailJS dashboard for correct Template ID

#### 3. "Invalid public key"
- **Cause**: Wrong Public Key
- **Fix**: Check your EmailJS account settings

#### 4. "Email not received"
- **Causes**:
  - Check spam/junk folder
  - Email service not properly configured
  - Template variables not matching
- **Fix**: Verify EmailJS service setup

### Test EmailJS Configuration:
Add this to your Contact component temporarily for debugging:

```javascript
// Add this in handleSubmit function before the try block
console.log('EmailJS Config:', {
  serviceId: emailjsConfig.serviceId,
  templateId: emailjsConfig.templateId,
  publicKey: emailjsConfig.publicKey ? 'Present' : 'Missing'
});
```

## Production vs Development

### Development Testing:
- ✅ Works with localhost
- ✅ Real email sending
- ✅ Full functionality
- ✅ Easy debugging

### Production Testing:
- ✅ Works with live domain
- ✅ Real email sending
- ✅ Full functionality
- ✅ Real user experience

## EmailJS Free Tier Limits

- **200 emails per month**
- **Perfect for portfolio sites**
- **No credit card required**

## Quick Test Checklist

- [ ] EmailJS account created
- [ ] Service configured
- [ ] Template created
- [ ] Credentials updated in config file
- [ ] Development server running
- [ ] Form validation working
- [ ] Success message appears
- [ ] Email received in inbox
- [ ] Error handling working

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all EmailJS credentials are correct
3. Test with a simple message first
4. Check your email spam folder
5. Ensure your email service is properly configured in EmailJS

Remember: EmailJS works the same way in both development and production environments!
