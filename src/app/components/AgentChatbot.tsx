'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, User, Minus } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'normal' | 'lead-collection' | 'lead-submitted';
}

interface ChatHistory {
  role: 'user' | 'assistant';
  content: string;
}

interface LeadData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  projectDetails: string;
  budget?: string;
  timeline?: string;
}

export default function AgentChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I am Ismail Assistant, an AI agent here to help you with any questions about Ismail's portfolio and services. What can I assist you with today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCollectingLead, setIsCollectingLead] = useState(false);
  const [waitingForLeadConfirmation, setWaitingForLeadConfirmation] = useState(false);
  const [currentLeadStep, setCurrentLeadStep] = useState(0);

  const [leadData, setLeadData] = useState<LeadData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectDetails: '',
    budget: '',
    timeline: '',
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const leadSteps = [
    { question: "Great! What's your name?", field: 'name', placeholder: 'Enter your name' },
    { question: "Perfect! What's your email address?", field: 'email', placeholder: 'Enter your email' },
    { question: "And your phone number?", field: 'phone', placeholder: 'Enter phone number' },
    { question: "What type of project are you looking for?", field: 'projectType', placeholder: 'e.g., Portfolio, Web App, E-commerce' },
    { question: "Tell me more about your project:", field: 'projectDetails', placeholder: 'Project details' },
    { question: "What’s your budget range? (optional)", field: 'budget', placeholder: 'e.g., $1k-$5k' },
    { question: "And your expected timeline? (optional)", field: 'timeline', placeholder: 'e.g., 1 month, ASAP' }
  ];

  const stopWords = ['no', 'not now', 'cancel', 'nah', 'leave it', 'stop'];

  const handleLeadCollection = async () => {
    if (!inputMessage.trim()) return;

    const lower = inputMessage.toLowerCase();
    if (stopWords.some(word => lower.includes(word))) {
      setIsCollectingLead(false);
      setCurrentLeadStep(0);
      setInputMessage('');
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "No problem! If you want to continue later, I'm right here 😊",
          isUser: false,
          timestamp: new Date(),
        }
      ]);
      return;
    }

    const currentStep = leadSteps[currentLeadStep];
    const updatedLeadData = { ...leadData };
    updatedLeadData[currentStep.field as keyof LeadData] = inputMessage;

    if (currentStep.field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputMessage)) {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            text: "❌ Please enter a valid email address.",
            isUser: false,
            timestamp: new Date(),
          }
        ]);
        return;
      }
    }

    setLeadData(updatedLeadData);
    setMessages(prev => [
      ...prev,
      { id: Date.now().toString(), text: inputMessage, isUser: true, timestamp: new Date(), type: 'lead-collection' },
    ]);

    setInputMessage('');

    if (currentLeadStep < leadSteps.length - 1) {
      const nextStep = leadSteps[currentLeadStep + 1];
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: nextStep.question,
          isUser: false,
          timestamp: new Date(),
          type: 'lead-collection',
        },
      ]);
      setCurrentLeadStep(prev => prev + 1);
    } else {
      await submitLead(updatedLeadData);
    }
  };

  const submitLead = async (finalLeadData: LeadData) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalLeadData),
      });

      const thankYouMsg = {
        id: Date.now().toString(),
        text: `Thank you ${finalLeadData.name}! Ismail will contact you within 24 hours at ${finalLeadData.email}. 🚀`,
        isUser: false,
        timestamp: new Date(),
        type: 'lead-submitted'
      };

      setMessages(prev => [...prev, thankYouMsg as Message]);

    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "Error submitting lead. Please try again later.",
          isUser: false,
          timestamp: new Date(),
        }
      ]);
    } finally {
      setIsCollectingLead(false);
      setWaitingForLeadConfirmation(false);
      setCurrentLeadStep(0);
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    if (isCollectingLead) {
      await handleLeadCollection();
      return;
    }

    if (waitingForLeadConfirmation) {
      const response = inputMessage.trim().toLowerCase();
      if (['yes', 'ok', 'sure', 'yep'].includes(response)) {
        setIsCollectingLead(true);
        setWaitingForLeadConfirmation(false);
        setCurrentLeadStep(0);

        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            text: leadSteps[0].question,
            isUser: false,
            timestamp: new Date(),
            type: 'lead-collection',
          },
        ]);
      } else if (stopWords.includes(response)) {
        setWaitingForLeadConfirmation(false);
        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            text: "Sure! If you change your mind, just say 'start project' anytime 😊",
            isUser: false,
            timestamp: new Date(),
          },
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            text: "Just to confirm — would you like to start sharing your project info?",
            isUser: false,
            timestamp: new Date(),
          },
        ]);
      }
      setInputMessage('');
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputMessage,
          history: chatHistory,
        }),
      });

      const data = await response.json();
      const botMessage = data.message;

      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: botMessage,
          isUser: false,
          timestamp: new Date(),
        }
      ]);

      const interestKeywords = ['build', 'hire', 'project', 'website', 'web app', 'ecommerce', 'portfolio'];
      const hasProjectInterest = interestKeywords.some(word =>
        inputMessage.toLowerCase().includes(word) ||
        botMessage.toLowerCase().includes(word)
      );

      if (hasProjectInterest && !isCollectingLead && !waitingForLeadConfirmation) {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            text: "Ismail can absolutely help with that! Would you like to begin sharing your project details so we can provide a personalized quote?",
            isUser: false,
            timestamp: new Date(),
          },
        ]);
        setWaitingForLeadConfirmation(true);
      }

      setChatHistory(prev => [
        ...prev,
        { role: 'user', content: inputMessage },
        { role: 'assistant', content: botMessage },
      ]);

    } catch (err) {
      console.error('Chat Error:', err);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "Sorry, I ran into an issue. Please try again later.",
          isUser: false,
          timestamp: new Date(),
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="fixed bottom-5 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black hover:bg-gray-800 text-white rounded-full p-4 shadow-lg"
        >
          <Sparkles size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-end justify-end p-4 z-50">
          <div className="bg-white shadow-xl border rounded-lg w-full max-w-md h-[600px] flex flex-col overflow-hidden">
            <div className="bg-black text-white px-4 py-3 flex justify-between items-center">
              <span className="text-sm font-semibold">
                {isCollectingLead ? '📝 Start Your Project' : '🤖 Ismail AI Assistant'}
              </span>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsOpen(false)} title="Close">
                  <X size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-3 overflow-y-auto">
              {messages.map((msg) => (
                <div key={msg.id} className={`mb-2 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-3 py-2 rounded-lg text-sm max-w-[75%] 
                    ${msg.isUser ? 'bg-black text-white' :
                      msg.type === 'lead-submitted' ? 'bg-green-100 text-green-800' :
                      msg.type === 'lead-collection' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-200 text-black'
                    }`}>
                    {msg.text}
                    <div className="text-gray-400 text-xs mt-1">{msg.timestamp.toLocaleTimeString()}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-gray-400 text-xs mt-2">Typing...</div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-3">
              <div className="flex items-center gap-2">
                <input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={
                    isCollectingLead
                      ? leadSteps[currentLeadStep]?.placeholder || 'Type here...'
                      : "Ask the AI anything..."
                  }
                  className="flex-1 border px-3 py-2 rounded text-sm focus:outline-black"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-black text-white px-3 py-2 rounded"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>

            <div className="text-center py-2 border-t text-xs text-gray-500">
              Built with ❤️ by Ismail • Powered by OpenAI
            </div>
          </div>
        </div>
      )}
    </>
  );
}