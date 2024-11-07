// Chat.js
import React, { useState, useEffect } from 'react';
import { fetchMessages, sendMessage } from '../../services/chatService';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages().then(setMessages);
  }, []);

  const handleSend = () => {
    sendMessage(newMessage).then(() => {
      setMessages([...messages, { text: newMessage, sender: 'You' }]);
      setNewMessage('');
    });
  };

  return (
    <div className="chat bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Project Chat</h2>
      <div className="chat-window h-64 overflow-y-auto mb-4 border p-2">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow p-2 border rounded-l-md"
          placeholder="Type your message..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded-r-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;