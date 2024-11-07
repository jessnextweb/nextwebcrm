// WorkflowTable.js
import React from 'react';

const WorkflowTable = ({ workflows, deleteWorkflow, editWorkflow }) => {
  return (
    <div className="workflow-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Existing Workflows</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Workflow Name</th>
            <th>Trigger</th>
            <th>Action</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workflows.map((workflow) => (
            <tr key={workflow.id}>
              <td>{workflow.name}</td>
              <td>{workflow.trigger}</td>
              <td>{workflow.action}</td>
              <td>
                <button onClick={() => editWorkflow(workflow)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => deleteWorkflow(workflow.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkflowTable;