import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import { chatbotRespond } from './utils/chatbot';

function App() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message) => {
    const userMessage = { text: message, sender: 'user', timestamp: new Date() };
    const botResponse = chatbotRespond(message);
    const botMessage = { text: botResponse, sender: 'bot', timestamp: new Date() };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-4">
          <h1 className="text-white text-xl font-bold">Customer Support Chatbot</h1>
        </div>
        
        <div className="h-[500px] overflow-y-auto p-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;