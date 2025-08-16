import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  projectDetails: string;
  budget?: string;
  timeline?: string;
}

export async function POST(request: NextRequest) {
  try {
    const leadData: LeadData = await request.json();

    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.phone || !leadData.projectType || !leadData.projectDetails) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, projectType, projectDetails' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Prepare email content
    const mailOptions = {
      from: `Portfolio Lead <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO || process.env.EMAIL_USER,
      subject: `🔥 NEW LEAD: ${leadData.projectType} Project - ${leadData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🚀 New Project Lead</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">From your portfolio chatbot</p>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e1e5e9; border-top: none;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                👤 Contact Information
              </h2>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <strong style="color: #667eea;">Name:</strong><br>
                  ${leadData.name}
                </div>
                <div>
                  <strong style="color: #667eea;">Email:</strong><br>
                  <a href="mailto:${leadData.email}" style="color: #667eea;">${leadData.email}</a>
                </div>
                <div>
                  <strong style="color: #667eea;">Phone:</strong><br>
                  <a href="tel:${leadData.phone}" style="color: #667eea;">${leadData.phone}</a>
                </div>
                <div>
                  <strong style="color: #667eea;">Project Type:</strong><br>
                  ${leadData.projectType}
                </div>
              </div>
            </div>

            <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #333; margin-top: 0; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                📋 Project Details
              </h3>
              <div style="background: white; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
                ${leadData.projectDetails.replace(/\n/g, '<br>')}
              </div>
            </div>

            ${leadData.budget || leadData.timeline ? `
            <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #333; margin-top: 0; border-bottom: 2px solid #ffc107; padding-bottom: 10px;">
                💰 Additional Information
              </h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                ${leadData.budget ? `
                <div>
                  <strong style="color: #856404;">Budget Range:</strong><br>
                  ${leadData.budget}
                </div>
                ` : ''}
                ${leadData.timeline ? `
                <div>
                  <strong style="color: #856404;">Timeline:</strong><br>
                  ${leadData.timeline}
                </div>
                ` : ''}
              </div>
            </div>
            ` : ''}

            <div style="background: #d4edda; padding: 20px; border-radius: 8px; text-align: center;">
              <h3 style="color: #155724; margin-top: 0;">🎯 Next Steps</h3>
              <p style="color: #155724; margin-bottom: 0;">
                This lead was generated from your portfolio chatbot. 
                <strong>Contact them within 24 hours for the best conversion rate!</strong>
              </p>
            </div>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; text-align: center; border: 1px solid #e1e5e9; border-top: none;">
            <p style="color: #6c757d; margin: 0; font-size: 14px;">
              📅 Generated on ${new Date().toLocaleString()}<br>
              🤖 Via Portfolio AI Chatbot
            </p>
          </div>
        </div>
      `,
      text: `
NEW PROJECT LEAD - Portfolio Chatbot

Contact Information:
- Name: ${leadData.name}
- Email: ${leadData.email}
- Phone: ${leadData.phone}
- Project Type: ${leadData.projectType}

Project Details:
${leadData.projectDetails}

${leadData.budget ? `Budget: ${leadData.budget}` : ''}
${leadData.timeline ? `Timeline: ${leadData.timeline}` : ''}

Generated on: ${new Date().toLocaleString()}
Via: Portfolio AI Chatbot
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Lead submitted successfully:', {
      name: leadData.name,
      email: leadData.email,
      projectType: leadData.projectType,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Lead submitted successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    console.error('Lead submission error:', {
      message: error?.message,
      code: error?.code,
      stack: error?.stack,
    });

    let errorMessage = 'Failed to submit lead';
    let statusCode = 500;

    if (error?.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your Gmail App Password configuration.';
      statusCode = 401;
    } else if (error?.code === 'ECONNECTION') {
      errorMessage = 'Unable to connect to email service. Please try again later.';
      statusCode = 503;
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
