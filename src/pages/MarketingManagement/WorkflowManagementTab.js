// WorkflowManagementTab.js
import React, { useState, useEffect } from 'react';
import WorkflowForm from './WorkflowForm';
import WorkflowTable from './WorkflowTable';
import WorkflowEditor from './WorkflowEditor';
import {
  fetchWorkflows,
  createWorkflow,
  updateWorkflow,
  deleteWorkflow,
} from '../../services/workflowService';

const WorkflowManagementTab = () => {
  const [workflows, setWorkflows] = useState([]);
  const [editingWorkflow, setEditingWorkflow] = useState(null);

  useEffect(() => {
    fetchWorkflows().then(setWorkflows);
  }, []);

  const createNewWorkflow = async (workflow) => {
    const newWorkflow = await createWorkflow(workflow);
    setWorkflows([...workflows, newWorkflow]);
  };

  const editWorkflow = (workflow) => {
    setEditingWorkflow(workflow);
  };

  const saveUpdatedWorkflow = async (updatedWorkflow) => {
    const updated = await updateWorkflow(updatedWorkflow.id, updatedWorkflow);
    setWorkflows(
      workflows.map((workflow) => (workflow.id === updated.id ? updated : workflow))
    );
    setEditingWorkflow(null);
  };

  const removeWorkflow = async (workflowId) => {
    await deleteWorkflow(workflowId);
    setWorkflows(workflows.filter((workflow) => workflow.id !== workflowId));
  };

  return (
    <div className="workflow-management bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Automation & Workflow Management</h2>
      {editingWorkflow ? (
        <WorkflowEditor
          workflow={editingWorkflow}
          updateWorkflow={saveUpdatedWorkflow}
          cancelEdit={() => setEditingWorkflow(null)}
        />
      ) : (
        <>
          <WorkflowForm createNewWorkflow={createNewWorkflow} />
          <WorkflowTable
            workflows={workflows}
            deleteWorkflow={removeWorkflow}
            editWorkflow={editWorkflow}
          />
        </>
      )}
    </div>
  );
};

export default WorkflowManagementTab;