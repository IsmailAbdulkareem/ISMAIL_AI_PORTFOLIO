'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import { X, Send, Sparkles, Bot, User, Minimize2, Maximize2, Loader2, CheckCircle, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load ReactMarkdown for better performance
const ReactMarkdown = lazy(() => import('react-markdown'));

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  toolUsed?: string;
}

// Memoized Message Component to prevent unnecessary re-renders
const MessageBubble = React.memo(({ msg }: { msg: Message }) => (
  <motion.div
    key={msg.id}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`mb-4 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
  >
    <div className={`flex gap-2 max-w-[90%] sm:max-w-[85%] ${msg.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
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
              <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </Suspense>
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
));

MessageBubble.displayName = 'MessageBubble';

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

  // Maximum messages to keep in memory (prevents performance issues)
  const MAX_MESSAGES = 50;

  // Memoize quick actions to prevent recreation on every render
  const quickActions = useMemo(() => [
    { label: "View Projects", message: "Show me Ismail's projects" },
    { label: "Services & Pricing", message: "What services does Ismail offer and what are the prices?" },
    { label: "Contact Info", message: "How can I contact Ismail?" },
    { label: "Start Project", action: () => setShowLeadForm(true) },
  ], []);

  // Auto-open after 5 seconds (disabled by default for better performance)
  useEffect(() => {
    // Uncomment the line below to enable auto-open
    // const timer = setTimeout(() => setIsOpen(true), 5000);
    // return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll on mobile when chatbot is open
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      document.body.classList.add('chatbot-open');
    } else {
      document.body.classList.remove('chatbot-open');
    }
    return () => {
      document.body.classList.remove('chatbot-open');
    };
  }, [isOpen]);

  // Close chatbot on ESC key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', handleEscKey);
      }
    };
  }, [isOpen]);

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

  const handleSendMessage = useCallback(async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => {
      const updated = [...prev, userMessage];
      // Keep only the last MAX_MESSAGES to prevent memory issues
      return updated.length > MAX_MESSAGES ? updated.slice(-MAX_MESSAGES) : updated;
    });
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: currentMessage,
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

      setMessages(prev => {
        const updated = [...prev, botMessage];
        return updated.length > MAX_MESSAGES ? updated.slice(-MAX_MESSAGES) : updated;
      });

      setChatHistory(prev => [
        ...prev,
        { role: 'user', content: currentMessage },
        { role: 'assistant', content: data.message },
      ]);

      // Check if bot suggests lead capture
      if (data.message.toLowerCase().includes('share your project') ||
          data.message.toLowerCase().includes('get started') ||
          data.message.toLowerCase().includes('personalized quote')) {
        setTimeout(() => {
          setMessages(prev => {
            const updated = [...prev, {
              id: (Date.now() + 2).toString(),
              text: "Would you like to fill out a quick form so Ismail can get back to you with a detailed proposal?",
              isUser: false,
              timestamp: new Date(),
            }];
            return updated.length > MAX_MESSAGES ? updated.slice(-MAX_MESSAGES) : updated;
          });
        }, 1000);
      }

    } catch (err) {
      console.error('Chat Error:', err);
      setMessages(prev => {
        const updated = [...prev, {
          id: (Date.now() + 1).toString(),
          text: "I'm having trouble connecting right now. Please try again or contact Ismail directly at ismail233290@gmail.com",
          isUser: false,
          timestamp: new Date(),
        }];
        return updated.length > MAX_MESSAGES ? updated.slice(-MAX_MESSAGES) : updated;
      });
    } finally {
      setIsLoading(false);
    }
  }, [inputMessage, isLoading, chatHistory]);

  const handleLeadSubmit = useCallback(async (e: React.FormEvent) => {
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

      setMessages(prev => {
        const updated = [...prev, {
          id: Date.now().toString(),
          text: `🎉 Thank you ${leadData.name}! Your information has been sent to Ismail. He'll contact you at ${leadData.email} within 24 hours. Check your email for confirmation!`,
          isUser: false,
          timestamp: new Date(),
        }];
        return updated.length > MAX_MESSAGES ? updated.slice(-MAX_MESSAGES) : updated;
      });

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
      setMessages(prev => {
        const updated = [...prev, {
          id: Date.now().toString(),
          text: "Sorry, there was an error submitting your information. Please contact Ismail directly at ismail233290@gmail.com or +92 330 3911285",
          isUser: false,
          timestamp: new Date(),
        }];
        return updated.length > MAX_MESSAGES ? updated.slice(-MAX_MESSAGES) : updated;
      });
    } finally {
      setIsLoading(false);
    }
  }, [leadData]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  return (
    <>
      {/* Chatbot Toggle Button - Always visible */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-3 sm:p-4 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="sm:w-7 sm:h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles size={24} className="sm:w-7 sm:h-7" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 sm:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 w-full sm:max-w-md h-full sm:h-auto"
            >
              <div className="bg-white h-full sm:h-auto sm:rounded-2xl shadow-2xl overflow-hidden border-0 sm:border border-gray-200 flex flex-col max-h-screen sm:max-h-[calc(100vh-3rem)] safe-area-inset">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 sm:px-6 py-4 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Bot size={24} />
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg">Ismail's AI Assistant</h3>
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
                  <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white min-h-0 max-h-[calc(100vh-16rem)] sm:max-h-[28rem]">
                    {messages.map((msg) => (
                      <MessageBubble key={msg.id} msg={msg} />
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
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex-shrink-0">
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
                            className="px-3 py-2 bg-white border border-gray-300 rounded-full text-xs hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-200 min-h-[36px] flex items-center justify-center"
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
                      className="px-4 py-3 bg-blue-50 border-t border-blue-200 max-h-[50vh] overflow-y-auto flex-shrink-0"
                    >
                      <form onSubmit={handleLeadSubmit} className="space-y-2.5">
                        <h4 className="font-bold text-sm text-gray-800 mb-2">Start Your Project 🚀</h4>
                        <input
                          type="text"
                          placeholder="Your Name *"
                          value={leadData.name}
                          onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                          required
                          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="email"
                          placeholder="Your Email *"
                          value={leadData.email}
                          onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                          required
                          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="tel"
                          placeholder="Phone (optional)"
                          value={leadData.phone}
                          onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="Project Type (e.g., AI Website) *"
                          value={leadData.project_type}
                          onChange={(e) => setLeadData({ ...leadData, project_type: e.target.value })}
                          required
                          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <textarea
                          placeholder="Project Details *"
                          value={leadData.project_details}
                          onChange={(e) => setLeadData({ ...leadData, project_details: e.target.value })}
                          required
                          rows={3}
                          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                        <div className="flex gap-2">
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 min-h-[44px]"
                          >
                            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <CheckCircle size={16} />}
                            Submit
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowLeadForm(false)}
                            className="px-4 py-2.5 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-colors min-h-[44px]"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {/* Input Area */}
                  <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
                    <div className="flex gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me anything about Ismail..."
                        disabled={isLoading}
                        className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim() || isLoading}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[44px]"
                        aria-label="Send message"
                      >
                        {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center px-2">
                      Powered by OpenAI • Built with ❤️ by Ismail
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
