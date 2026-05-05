/**
 * Lead Capture API Route
 * Captures lead information and sends email notification using Nodemailer
 */

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use App Password for Gmail
  },
});

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, project_type, project_details, budget, timeline } = body;

    // Validate required fields
    if (!name || !email || !project_type || !project_details) {
      return NextResponse.json(
        { error: 'Name, email, project type, and project details are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🚀 New Lead from Portfolio!</h1>
        </div>

        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #1f2937; margin-top: 0;">Lead Information</h2>

          <div style="margin: 20px 0; padding: 15px; background: #f3f4f6; border-radius: 8px;">
            <p style="margin: 8px 0;"><strong style="color: #3b82f6;">👤 Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong style="color: #3b82f6;">📧 Email:</strong> <a href="mailto:${email}" style="color: #8b5cf6;">${email}</a></p>
            ${phone ? `<p style="margin: 8px 0;"><strong style="color: #3b82f6;">📱 Phone:</strong> <a href="tel:${phone}" style="color: #8b5cf6;">${phone}</a></p>` : ''}
          </div>

          <div style="margin: 20px 0; padding: 15px; background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <h3 style="color: #1f2937; margin-top: 0;">Project Details</h3>
            <p style="margin: 8px 0;"><strong>Type:</strong> ${project_type}</p>
            <p style="margin: 8px 0;"><strong>Details:</strong></p>
            <p style="margin: 8px 0; padding: 10px; background: white; border-radius: 4px;">${project_details}</p>
            ${budget ? `<p style="margin: 8px 0;"><strong>Budget:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p style="margin: 8px 0;"><strong>Timeline:</strong> ${timeline}</p>` : ''}
          </div>

          <div style="margin: 30px 0; padding: 20px; background: #f0fdf4; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #166534; font-size: 16px;">
              ⏰ <strong>Action Required:</strong> Respond within 24 hours!
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
              Reply to ${name}
            </a>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
          <p>Sent from your Portfolio AI Chatbot</p>
          <p>Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    // Send email to Ismail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'ismail233290@gmail.com',
      subject: `🚀 New Lead: ${name} - ${project_type}`,
      html: emailContent,
      replyTo: email,
    });

    // Send confirmation email to lead
    const confirmationEmail = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}! 🎉</h1>
        </div>

        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="font-size: 16px; color: #1f2937; line-height: 1.6;">
            Thank you for your interest in working with me! I've received your project details and will get back to you within <strong>24 hours</strong>.
          </p>

          <div style="margin: 25px 0; padding: 20px; background: #f0fdf4; border-left: 4px solid #10b981; border-radius: 4px;">
            <h3 style="color: #166534; margin-top: 0;">What's Next?</h3>
            <ul style="color: #1f2937; line-height: 1.8;">
              <li>I'll review your project requirements</li>
              <li>Prepare a detailed proposal and quote</li>
              <li>Schedule a call to discuss your vision</li>
              <li>Answer any questions you may have</li>
            </ul>
          </div>

          <div style="margin: 25px 0; padding: 20px; background: #eff6ff; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Your Project Summary</h3>
            <p style="margin: 8px 0;"><strong>Type:</strong> ${project_type}</p>
            <p style="margin: 8px 0;"><strong>Details:</strong> ${project_details}</p>
            ${budget ? `<p style="margin: 8px 0;"><strong>Budget:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p style="margin: 8px 0;"><strong>Timeline:</strong> ${timeline}</p>` : ''}
          </div>

          <div style="margin: 30px 0; padding: 20px; background: #fef3c7; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              💡 <strong>In the meantime:</strong> Feel free to check out my portfolio and previous projects!
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #6b7280; margin-bottom: 15px;">Need to reach me urgently?</p>
            <p style="margin: 5px 0;">
              📧 <a href="mailto:ismail233290@gmail.com" style="color: #3b82f6; text-decoration: none;">ismail233290@gmail.com</a>
            </p>
            <p style="margin: 5px 0;">
              📱 <a href="https://wa.me/923303911285" style="color: #10b981; text-decoration: none;">WhatsApp: +92 330 3911285</a>
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
          <p>Best regards,</p>
          <p style="font-weight: bold; color: #1f2937;">Ismail Abdul Kareem</p>
          <p>Full-Stack AI Developer</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for reaching out! - Ismail Abdul Kareem',
      html: confirmationEmail,
    });

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully! Check your email for confirmation.',
    });

  } catch (error: any) {
    console.error('[Lead Capture Error]', error);

    if (error?.code === 'EAUTH') {
      return NextResponse.json(
        { error: 'Email service authentication failed. Please contact support.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to capture lead. Please try contacting directly via email.' },
      { status: 500 }
    );
  }
}
