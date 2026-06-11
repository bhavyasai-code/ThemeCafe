/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, HelpCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      sender: 'bot',
      text: "Hello explorer! Welcome to the Lunara Cafe help deck. ☕✨ Let me know if you are curious about our themed layouts, menus, or event reservations!",
      time: 'Just now'
    }
  ]);
  const [userText, setUserText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const presetFaqs = [
    { q: 'Is there parking?', a: 'Yes! We have complimentary valet and private secure parking for all our cafe patrons.' },
    { q: 'Are the rooms soundproof?', a: 'Yes! Every themed space is built with heavy acoustic insulation to keep its specific soundtracks, recitals, or narration completely private.' },
    { q: 'Can we book private parties?', a: 'Absolutely. All our themed chambers are available for private anniversaries, corporate offsites, and birthdays. Reach us via our reservation form segment!' },
    { q: 'Do you allow pets?', a: 'Pets are warmly welcome in our beautiful Seasonal Festival open courtyard porch area!' }
  ];

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setUserText('');
    setIsTyping(true);

    // Simulate cafe bot intelligent response
    setTimeout(() => {
      // Find matching faq answer if any
      const matchingFaq = presetFaqs.find((faq) => faq.q.toLowerCase().includes(textToSend.toLowerCase()) || textToSend.toLowerCase().includes(faq.q.toLowerCase()));
      const botResponseText = matchingFaq 
        ? matchingFaq.a
        : "That sounds like a wonderful plan! To coordinate custom reservations or questions of that scale, our concierge line is open: +91 40 4820 9900. Alternatively, fill our Table Reservation Form on the site and we will write back immediately.";

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponseText,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col items-end">
      {/* Floating Chat Trigger Button with animation */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-4 rounded-full bg-gradient-to-tr from-[#E07A5F] to-[#D4A017] text-white shadow-lg cursor-pointer flex items-center justify-center relative border border-white/20"
        id="btn-live-chat-toggle"
        title="Connect with Lunara Cafe Concierge"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 animate-pulse" />}
        {/* Unread dot indicator */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-ping" />
        )}
      </motion.button>

      {/* Floating Chat Panel Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', damping: 20, stiffness: 280 }}
            className="w-80 sm:w-96 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl shadow-2xl overflow-hidden mt-4 text-stone-900 dark:text-stone-100 flex flex-col h-[480px]"
            id="live-chat-drawer"
          >
            {/* Header banner */}
            <div className="p-4 bg-gradient-to-r from-[#4E342E] to-stone-900 text-white flex items-center justify-between border-b border-stone-800 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#D4A017]/10 text-[#D4A017]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">Lunara Cafe Assistant</h4>
                  <p className="text-[10px] text-emerald-450 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Online • Concierge live
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat list viewport */}
            <div
              ref={listRef}
              className="flex-grow p-4 overflow-y-auto space-y-4 bg-stone-50 dark:bg-stone-950 no-scrollbar"
            >
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2 max-w-[85%] ${isUser ? 'ml-auto flex-row-reverse' : ''}`}
                  >
                    {/* Head emblem */}
                    <div className={`p-1 rounded-lg text-xs shrink-0 mt-0.5 ${isUser ? 'bg-[#E07A5F]/15 text-[#E07A5F]' : 'bg-[#D4A017]/15 text-[#D4A017]'}`}>
                      {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    {/* Chat Bubble card */}
                    <div className={`p-3 rounded-2xl text-xs sm:text-sm shadow-sm leading-relaxed ${isUser ? 'bg-gradient-to-br from-[#E07A5F] to-orange-550 text-white rounded-tr-none' : 'bg-white dark:bg-stone-850 border border-stone-200/50 dark:border-stone-805 text-stone-950 dark:text-stone-100 rounded-tl-none'}`}>
                      <p>{msg.text}</p>
                      <span className={`block text-[8px] mt-1.5 text-right font-mono ${isUser ? 'text-stone-200' : 'text-stone-400'}`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Bot is typing prompt */}
              {isTyping && (
                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="p-1 rounded-lg text-xs shrink-0 mt-0.5 bg-[#D4A017]/15 text-[#D4A017]">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3 rounded-2xl bg-white dark:bg-stone-850 border border-stone-200/50 dark:border-stone-800 text-stone-450 dark:text-stone-450 flex items-center gap-1 text-xs">
                    <span className="w-1.5 h-1.5 bg-stone-450 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-stone-450 rounded-full animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 bg-stone-450 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestions list */}
            <div className="px-4 py-2 border-t border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900 shrink-0 select-none">
              <div className="flex items-center gap-1.5 text-stone-400 font-mono text-[9px] font-bold tracking-widest uppercase mb-1.5">
                <HelpCircle className="w-3.5 h-3.5" /> POPULAR FREQUENT QUESTIONS
              </div>
              <div className="flex flex-wrap gap-1.5">
                {presetFaqs.map((faq) => (
                  <button
                    key={faq.q}
                    onClick={() => handleSendMessage(faq.q)}
                    className="px-2.5 py-1 text-[10px] font-semibold rounded-lg bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/50 dark:border-stone-700 hover:border-[#D4A017] transition-all cursor-pointer"
                  >
                    {faq.q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input keyboard layout field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(userText);
              }}
              className="p-3 bg-stone-50 dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 flex gap-2 shrink-0 items-center"
            >
              <input
                type="text"
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-stone-850 text-stone-950 dark:text-white focus:outline-none focus:border-[#D4A017] border border-stone-200 dark:border-stone-750"
                id="live-chat-keyboard-input"
              />
              <button
                type="submit"
                className="p-2.5 bg-[#4E342E] dark:bg-[#D4A017] text-white dark:text-stone-950 rounded-xl cursor-pointer hover:brightness-105 active:scale-95 transition-all text-xs flex items-center justify-center shrink-0 font-medium"
                id="btn-live-chat-send"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
