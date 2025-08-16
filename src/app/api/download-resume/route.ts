import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    // Path to the resume file in the public folder
    const resumePath = join(process.cwd(), 'public', 'resume.pdf');
    
    // Read the file
    const resumeBuffer = readFileSync(resumePath);
    
    // Return the file as a download
    return new NextResponse(resumeBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Ismail_Resume.pdf"',
        'Content-Length': resumeBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error downloading resume:', error);
    return NextResponse.json(
      { error: 'Resume not found' },
      { status: 404 }
    );
  }
}
