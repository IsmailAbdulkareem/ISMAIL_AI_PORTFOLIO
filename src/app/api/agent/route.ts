/**
 * Agent API Route - Proxies requests to Python Backend
 * 
 * Development: Uses local backend at http://localhost:8000
 * Production: Uses Hugging Face Space backend
 */

import { NextRequest, NextResponse } from 'next/server';

// Backend URL configuration
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';

export async function POST(request: NextRequest) {
  try {
    // Parse incoming request
    const { message, history = [] } = await request.json();

    // Validate message
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Forward request to Python backend
    const backendResponse = await fetch(`${BACKEND_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history: history || [],
      }),
      // Add timeout
      signal: AbortSignal.timeout(30000), // 30 second timeout
    });

    // Handle backend errors
    if (!backendResponse.ok) {
      const errorData = await backendResponse.json().catch(() => ({}));
      
      if (backendResponse.status === 429) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }

      if (backendResponse.status === 500) {
        return NextResponse.json(
          { error: 'Backend service unavailable. Please try again later.' },
          { status: 503 }
        );
      }

      return NextResponse.json(
        { error: errorData.detail || 'Failed to get response from backend' },
        { status: backendResponse.status }
      );
    }

    // Parse and return backend response
    const data = await backendResponse.json();

    return NextResponse.json({
      message: data.message,
      timestamp: data.timestamp || new Date().toISOString(),
      source: 'python-backend', // For debugging
    });

  } catch (error: any) {
    console.error('[Agent API Error]', {
      message: error?.message,
      name: error?.name,
      cause: error?.cause,
    });

    // Handle different error types
    if (error?.name === 'TimeoutError' || error?.name === 'AbortError') {
      return NextResponse.json(
        { 
          error: 'Request timeout. Please try again.',
          fallback: "I'm having trouble connecting right now. Please try again in a moment, or feel free to email me directly at ismail233290@gmail.com!"
        },
        { status: 408 }
      );
    }

    if (error?.code === 'ECONNREFUSED') {
      return NextResponse.json(
        { 
          error: 'Backend service not available. Make sure the Python backend is running.',
          backendUrl: BACKEND_URL,
        },
        { status: 503 }
      );
    }

    // Generic error
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: Add GET endpoint for health check
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    backend: BACKEND_URL,
    service: 'nextjs-agent-proxy',
  });
}
