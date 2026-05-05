/**
 * AI Chatbot API Route
 * Uses OpenAI SDK with OpenRouter API for intelligent responses
 */

import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { agentTools, executeAgentTool, systemPrompt } from '@/app/lib/agent-tools';

// Initialize OpenAI client with OpenRouter
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    'X-Title': 'Ismail Portfolio Chatbot',
  }
});

// Rate limiting (simple in-memory store)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 20; // requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(identifier);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier = request.headers.get('x-forwarded-for') || 'anonymous';
    if (!checkRateLimit(identifier)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429 }
      );
    }

    // Parse request
    const { message, history = [] } = await request.json();

    // Validate input
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message is too long. Please keep it under 1000 characters.' },
        { status: 400 }
      );
    }

    // Build messages array
    const messages: any[] = [
      { role: 'system', content: systemPrompt },
      ...history.slice(-10), // Keep last 10 messages for context
      { role: 'user', content: message }
    ];

    // Call OpenAI with tools
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-4o-mini', // Using GPT-4o-mini via OpenRouter
      messages,
      tools: agentTools,
      tool_choice: 'auto',
      temperature: 0.7,
      max_tokens: 500,
    });

    const responseMessage = completion.choices[0].message;

    // Handle tool calls
    if (responseMessage.tool_calls && responseMessage.tool_calls.length > 0) {
      const toolCalls = responseMessage.tool_calls;
      const toolResults: any[] = [];

      for (const toolCall of toolCalls) {
        // OpenAI SDK v5 structure
        const functionCall = toolCall as any;
        const toolName = functionCall.name || functionCall.function?.name;
        const toolArgs = functionCall.arguments ? JSON.parse(functionCall.arguments) : functionCall.function?.arguments ? JSON.parse(functionCall.function.arguments) : {};

        const result = executeAgentTool(toolName, toolArgs);

        toolResults.push({
          tool_call_id: toolCall.id,
          role: 'tool',
          name: toolName,
          content: JSON.stringify(result)
        });
      }

      // Get final response with tool results
      const finalCompletion = await openai.chat.completions.create({
        model: 'openai/gpt-4o-mini',
        messages: [
          ...messages,
          responseMessage,
          ...toolResults
        ],
        temperature: 0.7,
        max_tokens: 500,
      });

      const finalMessage = finalCompletion.choices[0].message.content;

      return NextResponse.json({
        message: finalMessage,
        tool_used: (toolCalls[0] as any).name || (toolCalls[0] as any).function?.name,
        timestamp: new Date().toISOString()
      });
    }

    // No tool calls, return direct response
    return NextResponse.json({
      message: responseMessage.content,
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    console.error('[Chat API Error]', error);

    // Handle specific errors
    if (error?.status === 401) {
      return NextResponse.json(
        { error: 'API authentication failed. Please check configuration.' },
        { status: 500 }
      );
    }

    if (error?.status === 429) {
      return NextResponse.json(
        { error: 'AI service is busy. Please try again in a moment.' },
        { status: 429 }
      );
    }

    if (error?.code === 'ECONNREFUSED' || error?.code === 'ETIMEDOUT') {
      return NextResponse.json(
        { error: 'Unable to connect to AI service. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'portfolio-chatbot',
    timestamp: new Date().toISOString()
  });
}
