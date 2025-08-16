# Gmail Setup Guide for Portfolio Contact Form

## Problem
You're getting the error: `535-5.7.8 Username and Password not accepted` when trying to send emails through your contact form.

## Solution: Use Gmail App Passwords

Gmail requires an "App Password" instead of your regular password for third-party applications like your portfolio contact form.

### Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click on "2-Step Verification"
4. Follow the steps to enable 2-factor authentication

### Step 2: Generate an App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click on "App passwords"
4. You may need to sign in again
5. Select "Mail" as the app and "Other" as the device
6. Enter a name like "Portfolio Contact Form"
7. Click "Generate"
8. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Update Your Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add these variables:

```env
# Email Configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-16-character-app-password
CONTACT_TO=your-gmail-address@gmail.com
```

**Important Notes:**
- Replace `your-gmail-address@gmail.com` with your actual Gmail address
- Replace `your-16-character-app-password` with the App Password you generated (remove spaces)
- The `EMAIL_USER` must be a Gmail address
- The `EMAIL_PASS` should be the App Password, NOT your regular Gmail password

### Step 4: Restart Your Development Server

After updating the environment variables:

```bash
npm run dev
```

### Step 5: Test the Contact Form

1. Go to your portfolio contact form
2. Fill out the form with test data
3. Submit the form
4. Check your Gmail inbox for the test message

## Troubleshooting

### If you still get authentication errors:

1. **Double-check the App Password**: Make sure you copied all 16 characters correctly
2. **Remove spaces**: The App Password might have spaces - remove them in your `.env.local` file
3. **Wait a few minutes**: Sometimes it takes a few minutes for the App Password to become active
4. **Check 2FA**: Make sure 2-factor authentication is actually enabled
5. **Try regenerating**: If it still doesn't work, generate a new App Password

### Common Mistakes:

- ❌ Using your regular Gmail password
- ❌ Using a non-Gmail email address
- ❌ Not enabling 2-factor authentication first
- ❌ Including spaces in the App Password
- ❌ Using an old/expired App Password

### Security Best Practices:

- ✅ Use App Passwords instead of regular passwords
- ✅ Generate a unique App Password for each application
- ✅ Keep your App Passwords secure and don't share them
- ✅ Regularly review and revoke unused App Passwords
- ✅ Use environment variables, never hardcode credentials

## Alternative: Use a Different Email Service

If you continue having issues with Gmail, consider using:

- **SendGrid** (free tier available)
- **Mailgun** (free tier available)
- **Resend** (free tier available)
- **AWS SES** (very cheap)

These services are designed for sending transactional emails and are often more reliable than Gmail SMTP.

## Need Help?

If you're still having issues after following this guide, check:

1. Your browser's developer console for any JavaScript errors
2. Your terminal/command prompt for server-side errors
3. Your Gmail account's security settings
4. That your `.env.local` file is in the correct location (project root)
