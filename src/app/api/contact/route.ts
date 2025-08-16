// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs'; // ensure Node runtime (not Edge)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields: name, email, message' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Validate Gmail email format
    if (!process.env.EMAIL_USER.includes('@gmail.com')) {
      console.error('EMAIL_USER must be a Gmail address');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    console.log('Creating email transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use service instead of host/port for better compatibility
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // This should be an App Password, not regular password
      },
    });

    // Verify transporter configuration
    console.log('Verifying transporter configuration...');
    await transporter.verify();

    console.log('Sending email...');
    const info = await transporter.sendMail({
      from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO || process.env.EMAIL_USER, // Send to yourself if no specific contact email
      replyTo: `${name} <${email}>`,
      subject: `New Portfolio Contact: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Portfolio Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #007bff;">Name:</strong> ${name}</p>
            <p><strong style="color: #007bff;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong style="color: #007bff;">Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    console.log('Email sent successfully:', info.messageId);
    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email sent successfully' 
    });

  } catch (error: any) {
    console.error('Email send error:', {
      message: error?.message,
      code: error?.code,
      command: error?.command,
      response: error?.response,
      stack: error?.stack,
    });

    // Provide more specific error messages
    let errorMessage = 'Failed to send email';
    let statusCode = 500;

    if (error?.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your Gmail App Password configuration.';
      statusCode = 401;
    } else if (error?.code === 'ECONNECTION') {
      errorMessage = 'Unable to connect to email service. Please try again later.';
      statusCode = 503;
    } else if (error?.code === 'ETIMEDOUT') {
      errorMessage = 'Email service timeout. Please try again later.';
      statusCode = 408;
    }

    return NextResponse.json(
      { 
        error: errorMessage, 
        details: process.env.NODE_ENV === 'development' ? error?.message : 'Internal server error'
      },
      { status: statusCode }
    );
  }
}
