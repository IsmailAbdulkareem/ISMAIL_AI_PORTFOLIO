import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { userMessage, botResponse, userInfo } = await request.json();

    if (!userMessage || !botResponse) {
      return NextResponse.json(
        { error: 'Message and response are required' },
        { status: 400 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: 'New Chat Conversation - Portfolio Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Chat Conversation</h2>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>User IP:</strong> ${userInfo?.ip || 'Unknown'}</p>
          <p><strong>User Agent:</strong> ${userInfo?.userAgent || 'Unknown'}</p>
          
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #666; margin-top: 0;">User Message:</h3>
            <p style="margin: 0;">${userMessage}</p>
          </div>
          
          <div style="background: #e8f4fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #666; margin-top: 0;">Bot Response:</h3>
            <p style="margin: 0;">${botResponse}</p>
          </div>
          
          <p style="color: #666; font-size: 12px;">
            This is an automated notification from your portfolio website chatbot.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true,
      message: 'Notification sent successfully'
    });

  } catch (error) {
    console.error('Error sending notification:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    );
  }
}
