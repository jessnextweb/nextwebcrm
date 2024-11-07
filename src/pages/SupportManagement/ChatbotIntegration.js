// ChatbotIntegration.js
import React, { useState } from 'react';
import { configureChatbot } from '../../services/chatbotService';

const ChatbotIntegration = () => {
  const [botConfig, setBotConfig] = useState({
    botName: '',
    triggerPhrases: '',
    responseTemplates: '',
  });

  const handleChange = (e) => {
    setBotConfig({ ...botConfig, [e.target.name]: e.target.value });
  };

  const saveConfig = () => {
    configureChatbot(botConfig).then((response) => {
      console.log('Chatbot configured:', response);
    });
  };

  return (
    <div className="chatbot-configuration bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">AI Chatbot Configuration</h2>
      <div>
        <label>Bot Name:</label>
        <input
          type="text"
          name="botName"
          value={botConfig.botName}
          onChange={handleChange}
          className="block mb-4 p-2 border"
        />
      </div>
      <div>
        <label>Trigger Phrases:</label>
        <input
          type="text"
          name="triggerPhrases"
          value={botConfig.triggerPhrases}
          onChange={handleChange}
          className="block mb-4 p-2 border"
        />
      </div>
      <div>
        <label>Response Templates:</label>
        <textarea
          name="responseTemplates"
          value={botConfig.responseTemplates}
          onChange={handleChange}
          className="block mb-4 p-2 border"
        />
      </div>
      
      <button onClick={saveConfig} className="bg-blue-500 text-white p-2 rounded-md">
        Save Configuration
      </button>
    

    </div>
  );
};

export default ChatbotIntegration;