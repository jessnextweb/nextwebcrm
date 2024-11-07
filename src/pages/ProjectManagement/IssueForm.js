// IssueForm.js
import React, { useState } from 'react';

const IssueForm = ({ logIssue }) => {
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('Open');

  const handleSubmit = (e) => {
    e.preventDefault();
    logIssue({ description, assignedTo, status });
    setDescription('');
    setAssignedTo('');
    setStatus('Open');
  };

  return (
    <form onSubmit={handleSubmit} className="issue-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Log New Issue</h2>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Issue Description"
        className="block mb-4 p-2 border rounded-md w-full"
        required
      />
      <input
        type="text"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        placeholder="Assigned To"
        className="block mb-4 p-2 border rounded-md w-full"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="block mb-4 p-2 border rounded-md w-full"
      >
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Closed">Closed</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
        Log Issue
      </button>
    </form>
  );
};

export default IssueForm;