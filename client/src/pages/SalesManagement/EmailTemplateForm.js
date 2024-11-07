// EmailTemplateForm.js
import React, { useState, useEffect } from 'react';
import { fetchEmailTemplates, saveEmailTemplate } from '../../services/emailService';

const EmailTemplateForm = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [emailContent, setEmailContent] = useState('');

  useEffect(() => {
    fetchEmailTemplates().then((data) => setTemplates(data));
  }, []);

  const handleTemplateChange = (e) => {
    const template = templates.find((t) => t.id === e.target.value);
    setSelectedTemplate(e.target.value);
    setEmailContent(template ? template.content : '');
  };

  const handleSaveTemplate = () => {
    saveEmailTemplate(selectedTemplate, emailContent).then(() => {
      alert('Template saved successfully!');
    });
  };

  return (
    <div className="email-template-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Customize Email Templates</h2>
      <select
        value={selectedTemplate}
        onChange={handleTemplateChange}
        className="mb-4 p-2 border rounded-md"
      >
        <option value="">Select Template</option>
        {templates.map((template) => (
          <option key={template.id} value={template.id}>
            {template.name}
          </option>
        ))}
      </select>
      <textarea
        value={emailContent}
        onChange={(e) => setEmailContent(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
        rows="10"
        placeholder="Customize your email content..."
      />
      <button
        onClick={handleSaveTemplate}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Save Template
      </button>
    </div>
  );
};

export default EmailTemplateForm;