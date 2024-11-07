// AIResolutionSuggestions.js
import React, { useEffect, useState } from 'react';
import { fetchResolutionSuggestions } from '../../services/supportService';

const AIResolutionSuggestions = ({ issueId }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (issueId) {
      fetchResolutionSuggestions(issueId).then((data) => setSuggestions(data));
    }
  }, [issueId]);

  return (
    <div className="ai-resolution-suggestions bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">AI-Powered Resolution Suggestions</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} className="mb-2">
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIResolutionSuggestions;