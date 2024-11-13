import React from 'react';
import { format } from 'date-fns';

function ChatMessage({ text, sender, timestamp }) {
  const isBot = sender === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[70%] rounded-lg p-3 ${
        isBot ? 'bg-gray-100' : 'bg-blue-500 text-white'
      }`}>
        <p className="whitespace-pre-line">{text}</p>
        <p className={`text-xs mt-1 ${isBot ? 'text-gray-500' : 'text-blue-100'}`}>
          {format(timestamp, 'HH:mm')}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;