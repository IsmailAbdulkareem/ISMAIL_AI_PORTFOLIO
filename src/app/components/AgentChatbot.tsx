'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Download, Minus } from 'lucide-react';

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
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am Ismail Assistant, an AI agent here to help you with any questions about Ismail\'s portfolio and services. What can I assist you with today?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCollectingLead, setIsCollectingLead] = useState(false);
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
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-open chatbot after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Lead collection steps
  const leadSteps = [
    {
      question: "Great! I'd love to help you with your project. What's your name?",
      field: 'name' as keyof LeadData,
      placeholder: 'Enter your full name'
    },
    {
      question: "Perfect! What's your email address?",
      field: 'email' as keyof LeadData,
      placeholder: 'Enter your email address'
    },
    {
      question: "And your phone number?",
      field: 'phone' as keyof LeadData,
      placeholder: 'Enter your phone number'
    },
    {
      question: "What type of project are you looking for? (e.g., Website, Web App, Portfolio, E-commerce, etc.)",
      field: 'projectType' as keyof LeadData,
      placeholder: 'Describe your project type'
    },
    {
      question: "Tell me more about your project requirements and goals:",
      field: 'projectDetails' as keyof LeadData,
      placeholder: 'Describe your project in detail'
    },
    {
      question: "What's your budget range? (optional)",
      field: 'budget' as keyof LeadData,
      placeholder: 'e.g., $1000-$5000, $5000-$10000, etc.'
    },
    {
      question: "What's your timeline for this project? (optional)",
      field: 'timeline' as keyof LeadData,
      placeholder: 'e.g., 1 month, 3 months, flexible'
    }
  ];

  const handleLeadCollection = async () => {
    if (!inputMessage.trim()) return;

    const currentStep = leadSteps[currentLeadStep];
    const updatedLeadData = { ...leadData };
    updatedLeadData[currentStep.field] = inputMessage;
    setLeadData(updatedLeadData);

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
      type: 'lead-collection'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Check if we have more steps
    if (currentLeadStep < leadSteps.length - 1) {
      const nextStep = leadSteps[currentLeadStep + 1];
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: nextStep.question,
        isUser: false,
        timestamp: new Date(),
        type: 'lead-collection'
      };
      setMessages(prev => [...prev, botMessage]);
      setCurrentLeadStep(prev => prev + 1);
    } else {
      // Final step - submit lead
      await submitLead(updatedLeadData);
    }
  };

  const submitLead = async (finalLeadData: LeadData) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalLeadData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit lead');
      }

      const successMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thank you ${finalLeadData.name}! I've received your project details and Ismail will get back to you within 24 hours at ${finalLeadData.email}. Your project sounds exciting and I'm confident we can create something amazing together! 🚀`,
        isUser: false,
        timestamp: new Date(),
        type: 'lead-submitted'
      };

      setMessages(prev => [...prev, successMessage]);
      setIsCollectingLead(false);
      setCurrentLeadStep(0);
      setLeadData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        projectDetails: '',
        budget: '',
        timeline: '',
      });

    } catch (error) {
      console.error('Error submitting lead:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, there was an issue submitting your information. Please try again or contact Ismail directly through the contact form.',
        isUser: false,
        timestamp: new Date(),
        type: 'lead-submitted'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Check if we're in lead collection mode
    if (isCollectingLead) {
      await handleLeadCollection();
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputMessage,
          history: chatHistory
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);

      // Check if the response indicates service interest
      const serviceKeywords = [
        'website', 'web app', 'project', 'development', 'build', 'create', 
        'hire', 'work', 'service', 'help', 'need', 'want', 'looking for',
        'portfolio', 'business', 'e-commerce', 'application'
      ];
      
      const userMessageLower = inputMessage.toLowerCase();
      const botResponseLower = data.message.toLowerCase();
      
      const hasServiceInterest = serviceKeywords.some(keyword => 
        userMessageLower.includes(keyword) || botResponseLower.includes(keyword)
      );

      // If service interest detected and not already collecting lead
      if (hasServiceInterest && !isCollectingLead && !data.message.includes('lead collection')) {
        const leadPromptMessage: Message = {
          id: (Date.now() + 2).toString(),
          text: "I'd be happy to help you with your project! To get started, I'll need to collect some information so Ismail can provide you with a personalized quote and timeline. Shall we begin?",
          isUser: false,
          timestamp: new Date(),
          type: 'lead-collection'
        };
        
        setMessages(prev => [...prev, leadPromptMessage]);
        setIsCollectingLead(true);
        setCurrentLeadStep(0);
      }

      // Update chat history for context
      setChatHistory(prev => [
        ...prev,
        { role: 'user', content: inputMessage },
        { role: 'assistant', content: data.message }
      ]);

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: error instanceof Error ? error.message : 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Character limit validation
  const maxChars = isCollectingLead ? 200 : 100;
  const isOverLimit = inputMessage.length > maxChars;

  // Handle resume download
  const handleResumeDownload = () => {
    window.open('/api/download-resume', '_blank');
  };

  // Handle minimize chat
  const handleMinimize = () => {
    setIsOpen(false);
  };

  // Get current placeholder text
  const getPlaceholderText = () => {
    if (isCollectingLead) {
      const currentStep = leadSteps[currentLeadStep];
      return currentStep?.placeholder || 'Enter your response...';
    }
    return "Ask me anything about Ismail's services...";
  };

  return (
    <>
      {/* Floating Chat Button with Tooltip */}
      <div className="fixed bottom-5 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-black hover:bg-gray-800 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <Sparkles size={24} />
        </button>
        
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-white text-black text-sm rounded-lg shadow-lg whitespace-nowrap">
            Try my AI Agent
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        )}
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-[700px] flex flex-col">
            {/* Header */}
            <div className="bg-black text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles size={20} />
                <span className="font-semibold">
                  {isCollectingLead ? '📝 Lead Collection' : '🤖 Ismail AI Agent 👈'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleResumeDownload}
                  className="hover:bg-gray-800 rounded-full p-2 transition-colors"
                  title="Download Resume"
                >
                  <Download size={16} />
                </button>
                <button
                  onClick={handleMinimize}
                  className="hover:bg-gray-800 rounded-full p-1 transition-colors"
                  title="Minimize"
                >
                  <Minus size={20} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-gray-800 rounded-full p-1 transition-colors"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser
                        ? 'bg-black text-white'
                        : message.type === 'lead-submitted'
                        ? 'bg-green-100 text-green-800 border border-green-200'
                        : message.type === 'lead-collection'
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'bg-gray-100 text-black'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {!message.isUser && (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'lead-submitted' ? 'bg-green-200' : 
                          message.type === 'lead-collection' ? 'bg-blue-200' : 'bg-gray-200'
                        }`}>
                          <Sparkles size={16} className={
                            message.type === 'lead-submitted' ? 'text-green-600' :
                            message.type === 'lead-collection' ? 'text-blue-600' : 'text-gray-600'
                          } />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleDateString()} {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                      {message.isUser && (
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-gray-600" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Sparkles size={16} />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="space-y-2">
                {isCollectingLead && (
                  <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
                    Step {currentLeadStep + 1} of {leadSteps.length} - Lead Collection
                  </div>
                )}
                <div className="flex space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={getPlaceholderText()}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                    disabled={isLoading}
                    maxLength={maxChars}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading || isOverLimit}
                    className="bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white rounded-lg px-4 py-2 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
                
                {/* Character limit warning */}
                {isOverLimit && (
                  <p className="text-xs text-red-500">
                    You exceeded the characters limit. Please input less than {maxChars} characters.
                  </p>
                )}
                
                {/* Character counter */}
                <div className="text-xs text-gray-500 text-right">
                  {inputMessage.length}/{maxChars}
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-4 py-2 border-t bg-gray-50 text-center">
              <p className="text-xs text-black">
                Powered by AI Agent • Build with ❤️ by <a href="https://github.com/IsmailAbdulkareem" className="underline hover:text-gray-600">Ismail</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
