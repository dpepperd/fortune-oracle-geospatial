'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ChatWidget.module.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function GeospatialChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello. I'm the Geospatial Intelligence Assistant. How can I help you with your survey, volumetrics, or mapping needs today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageToSend = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      // Calling a dedicated geospatial webhook endpoint
      const response = await fetch('https://n8n.srv1186790.hstgr.cloud/webhook/geospatial-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend }),
      });

      if (!response.ok) {
        throw new Error(`Webhook returned status ${response.status}`);
      }

      const data = await response.json();
      
      const botText = data.response || data.message || data.text || 
                      "Data received. Our engineering team will review your inquiry.";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      
      if (!isOpen) {
        setUnreadCount((prev) => prev + 1);
      }
    } catch (error) {
      console.error('Error calling webhook:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Connection timeout. Please contact ops@fortuneoraclemedia.com directly.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
      setIsTyping(false);
      
      if (!isOpen) {
        setUnreadCount((prev) => prev + 1);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles.container}>
      {!isOpen ? (
        <button
          className={styles.bubble}
          onClick={handleToggle}
          aria-label="Open chat"
          style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', border: '1px solid #334155' }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: '#94a3b8' }}
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {unreadCount > 0 && (
            <span className={styles.badge}>{unreadCount}</span>
          )}
        </button>
      ) : (
        <div className={styles.window}>
          <div className={styles.header} style={{ background: '#0f172a', borderBottom: '1px solid #1e293b' }}>
            <div>
              <h3 style={{ color: '#f8fafc' }}>Geospatial Support</h3>
              <p style={{ color: '#94a3b8' }}>Engineering & Operations</p>
            </div>
            <button
              className={styles.close}
              onClick={handleToggle}
              aria-label="Close chat"
              style={{ color: '#94a3b8' }}
            >
              ×
            </button>
          </div>

          <div className={styles.messages} style={{ backgroundColor: '#020617' }}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${
                  message.sender === 'user' ? styles.user : styles.bot
                }`}
              >
                <div className={styles.bubble} style={message.sender === 'bot' ? { backgroundColor: '#1e293b', color: '#f8fafc' } : { backgroundColor: '#6b21a8', color: '#ffffff' }}>
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.typing}>
                  <span style={{ backgroundColor: '#94a3b8' }} />
                  <span style={{ backgroundColor: '#94a3b8' }} />
                  <span style={{ backgroundColor: '#94a3b8' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputArea} style={{ backgroundColor: '#0f172a', borderTop: '1px solid #1e293b' }}>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter parameters..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
              style={{ backgroundColor: '#020617', color: '#f8fafc', border: '1px solid #334155' }}
            />
            <button
              className={styles.send}
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send message"
              style={{ backgroundColor: '#6b21a8' }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: 'white' }}
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
