// WorkflowManager.js
import React, { useState } from 'react';

const WorkflowManager = () => {
  const [milestones, setMilestones] = useState('');
  const [assignedUser, setAssignedUser] = useState('');

  const handleWorkflowCreate = () => {
    console.log('Workflow Created:', { milestones, assignedUser });
  };

  return (
    <div className="workflow-manager bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Create Automated Workflow</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Project Milestone"
          value={milestones}
          onChange={(e) => setMilestones(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Assign User"
          value={assignedUser}
          onChange={(e) => setAssignedUser(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>
      <button onClick={handleWorkflowCreate} className="bg-blue-500 text-white p-2 rounded-md">
        Create Workflow
      </button>
    </div>
  );
};

export default WorkflowManager;