import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Stop collection if user says "no" style responses
    const stopTriggers = ['no', 'not now', 'cancel', 'stop', 'leave it', 'change my mind'];
    const userSaidNo = stopTriggers.some(word =>
      message.toLowerCase().includes(word)
    );

    if (userSaidNo) {
      return NextResponse.json({
        message: "No problem! If you change your mind, I'm here anytime 😊",
      });
    }

    // Add system prompt and chat history
    const messages = [
      {
        role: 'system',
        content: `
You are Ismail AI Assistant, built into Ismail's portfolio website.

Your job is to:
- Answer questions about Ismail's web development skills (React, Next.js, Node.js, MongoDB, etc.)
- Guide users through website design topics
- Help users understand benefits of hiring Ismail
- Encourage interested users to start a lead collection (but don’t collect personal details directly – let the frontend handle that)

Always keep your tone professional, polite, concise.
        `
      },
      ...history,
      { role: 'user', content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Change to 'gpt-4o' for higher quality
      messages,
      temperature: 0.7,
      max_tokens: 300,
    });

    const assistantReply = completion.choices[0].message?.content || "Sorry, I couldn't generate a helpful response.";

    return NextResponse.json({
      message: assistantReply,
      timestamp: new Date().toISOString()
    });

  } catch (err: any) {
    console.error('[Agent API Error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}