// WorkflowEditor.js
import React, { useState, useEffect } from 'react';

const WorkflowEditor = ({ workflow, updateWorkflow, cancelEdit }) => {
  const [updatedWorkflow, setUpdatedWorkflow] = useState(workflow);

  useEffect(() => {
    setUpdatedWorkflow(workflow);
  }, [workflow]);

  const handleInputChange = (e) => {
    setUpdatedWorkflow({ ...updatedWorkflow, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateWorkflow(updatedWorkflow);
  };

  return (
    <div className="workflow-editor bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Edit Workflow</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Workflow Name:</label>
          <input
            type="text"
            name="name"
            value={updatedWorkflow.name}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Trigger:</label>
          <select
            name="trigger"
            value={updatedWorkflow.trigger}
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
            value={updatedWorkflow.action}
            onChange={handleInputChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Send Email">Send Email</option>
            <option value="Assign Sales Rep">Assign Sales Rep</option>
            <option value="Add to Drip Campaign">Add to Drip Campaign</option>
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
        <button onClick={cancelEdit} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default WorkflowEditor;