// WorkflowForm.js
import React, { useState } from 'react';

const WorkflowForm = ({ createNewWorkflow }) => {
  const [workflow, setWorkflow] = useState({
    name: '',
    trigger: 'New Lead',
    action: 'Send Email',
  });

  const handleInputChange = (e) => {
    setWorkflow({ ...workflow, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewWorkflow(workflow);
    setWorkflow({ name: '', trigger: 'New Lead', action: 'Send Email' });
  };

  return (
    <div className="workflow-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Create New Workflow</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Workflow Name:</label>
          <input
            type="text"
            name="name"
            value={workflow.name}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Trigger:</label>
          <select
            name="trigger"
            value={workflow.trigger}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="New Lead">New Lead</option>
            <option value="Email Opened">Email Opened</option>
            <option value="Link Clicked">Link Clicked</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Action:</label>
          <select
            name="action"
            value={workflow.action}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Send Email">Send Email</option>
            <option value="Assign Sales Rep">Assign Sales Rep</option>
            <option value="Add to Drip Campaign">Add to Drip Campaign</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Workflow
        </button>
      </form>
    </div>
  );
};

export default WorkflowForm;