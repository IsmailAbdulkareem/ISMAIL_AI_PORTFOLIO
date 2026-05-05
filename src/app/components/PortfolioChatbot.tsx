'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, User, Minimize2, Maximize2, Loader2, CheckCircle, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  toolUsed?: string;
}

interface ChatHistory {
  role: 'user' | 'assistant';
  content: string;
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm Ismail's AI Assistant. I can help you learn about his skills, projects, services, and pricing. I can also help you get started with your project. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    project_details: '',
    budget: '',
    timeline: '',
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

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
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputMessage,
          history: chatHistory,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        isUser: false,
        timestamp: new Date(),
        toolUsed: data.tool_used,
      };

      setMessages(prev => [...prev, botMessage]);

      setChatHistory(prev => [
        ...prev,
        { role: 'user', content: inputMessage },
        { role: 'assistant', content: data.message },
      ]);

      // Check if bot suggests lead capture
      if (data.message.toLowerCase().includes('share your project') ||
          data.message.toLowerCase().includes('get started') ||
          data.message.toLowerCase().includes('personalized quote')) {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: (Date.now() + 2).toString(),
            text: "Would you like to fill out a quick form so Ismail can get back to you with a detailed proposal?",
            isUser: false,
            timestamp: new Date(),
          }]);
        }, 1000);
      }

    } catch (err) {
      console.error('Chat Error:', err);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "I'm having trouble connecting right now. Please try again or contact Ismail directly at ismail233290@gmail.com",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit lead');
      }

      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: `🎉 Thank you ${leadData.name}! Your information has been sent to Ismail. He'll contact you at ${leadData.email} within 24 hours. Check your email for confirmation!`,
          isUser: false,
          timestamp: new Date(),
        },
      ]);

      setShowLeadForm(false);
      setLeadData({
        name: '',
        email: '',
        phone: '',
        project_type: '',
        project_details: '',
        budget: '',
        timeline: '',
      });

    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "Sorry, there was an error submitting your information. Please contact Ismail directly at ismail233290@gmail.com or +92 330 3911285",
          isUser: false,
          timestamp: new Date(),
        },
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

  const quickActions = [
    { label: "View Projects", message: "Show me Ismail's projects" },
    { label: "Services & Pricing", message: "What services does Ismail offer and what are the prices?" },
    { label: "Contact Info", message: "How can I contact Ismail?" },
    { label: "Start Project", action: () => setShowLeadForm(true) },
  ];

  return (
    <>
      {/* Chatbot Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            aria-label="Open chat"
          >
            <Sparkles size={28} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Bot size={24} />
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Ismail's AI Assistant</h3>
                      <p className="text-xs text-white/80">Online • Responds instantly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                      aria-label={isMinimized ? "Maximize" : "Minimize"}
                    >
                      {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                      aria-label="Close chat"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Content */}
              {!isMinimized && (
                <>
                  {/* Messages */}
                  <div className="h-[450px] overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mb-4 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex gap-2 max-w-[85%] ${msg.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            msg.isUser
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                              : 'bg-gradient-to-r from-gray-700 to-gray-900'
                          }`}>
                            {msg.isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                          </div>
                          <div>
                            <div className={`px-4 py-3 rounded-2xl ${
                              msg.isUser
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-none'
                                : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                            }`}>
                              {msg.isUser ? (
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                              ) : (
                                <div className="text-sm leading-relaxed prose prose-sm max-w-none prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:my-2 prose-li:my-0">
                                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                                </div>
                              )}
                              {msg.toolUsed && (
                                <div className="mt-2 pt-2 border-t border-gray-200/20">
                                  <p className="text-xs opacity-70 flex items-center gap-1">
                                    <Sparkles size={12} /> Used: {msg.toolUsed.replace(/_/g, ' ')}
                                  </p>
                                </div>
                              )}
                            </div>
                            <p className="text-xs text-gray-400 mt-1 px-2">
                              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-gray-500 mb-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center">
                          <Bot size={16} className="text-white" />
                        </div>
                        <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick Actions */}
                  {messages.length === 1 && (
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                      <p className="text-xs text-gray-600 mb-2 font-medium">Quick Actions:</p>
                      <div className="flex flex-wrap gap-2">
                        {quickActions.map((action, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (action.action) {
                                action.action();
                              } else if (action.message) {
                                setInputMessage(action.message);
                              }
                            }}
                            className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-200"
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Lead Form */}
                  {showLeadForm && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="px-4 py-3 bg-blue-50 border-t border-blue-200"
                    >
                      <form onSubmit={handleLeadSubmit} className="space-y-2">
                        <h4 className="font-bold text-sm text-gray-800 mb-2">Start Your Project 🚀</h4>
                        <input
                          type="text"
                          placeholder="Your Name *"
                          value={leadData.name}
                          onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                          required
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="email"
                          placeholder="Your Email *"
                          value={leadData.email}
                          onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                          required
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="tel"
                          placeholder="Phone (optional)"
                          value={leadData.phone}
                          onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="Project Type (e.g., AI Website) *"
                          value={leadData.project_type}
                          onChange={(e) => setLeadData({ ...leadData, project_type: e.target.value })}
                          required
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <textarea
                          placeholder="Project Details *"
                          value={leadData.project_details}
                          onChange={(e) => setLeadData({ ...leadData, project_details: e.target.value })}
                          required
                          rows={2}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                        <div className="flex gap-2">
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                          >
                            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle size={16} />}
                            Submit
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowLeadForm(false)}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {/* Input Area */}
                  <div className="p-4 bg-white border-t border-gray-200">
                    <div className="flex gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me anything about Ismail..."
                        disabled={isLoading}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim() || isLoading}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        aria-label="Send message"
                      >
                        {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Powered by OpenAI • Built with ❤️ by Ismail
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
