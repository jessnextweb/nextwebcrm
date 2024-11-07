import React, { useState } from 'react';

const CommunicationHub = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // Simulate sending email
  const sendEmail = () => {
    setStatus('Sending Email...');
    setTimeout(() => {
      console.log('Email sent:', message);
      setStatus('Email sent successfully!');
    }, 1000); // Simulate an async operation
  };

  // Simulate sending SMS
  const sendSMS = () => {
    setStatus('Sending SMS...');
    setTimeout(() => {
      console.log('SMS sent:', message);
      setStatus('SMS sent successfully!');
    }, 1000); // Simulate an async operation
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Communication Hub</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="block mb-4 p-2 border rounded-md w-full"
      />
      <button
        onClick={sendEmail}
        className="bg-blue-500 text-white p-2 rounded-md mr-2"
        disabled={!message}
      >
        Send Email
      </button>
      <button
        onClick={sendSMS}
        className="bg-green-500 text-white p-2 rounded-md"
        disabled={!message}
      >
        Send SMS
      </button>
      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
    </div>
  );
};

export default CommunicationHub;
