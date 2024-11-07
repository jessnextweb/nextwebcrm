
  // workflowService.js
export const fetchWorkflows = async () => {
  const response = await fetch('https://retoolapi.dev/khAESQ/data');
  return response.json();
};

export const createWorkflow = async (workflow) => {
  const response = await fetch('https://retoolapi.dev/khAESQ/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(workflow),
  });
  return response.json();
};

export const updateWorkflow = async (workflowId, updatedWorkflow) => {
  const response = await fetch(`https://retoolapi.dev/khAESQ/data`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedWorkflow),
  });
  return response.json();
};

export const deleteWorkflow = async (workflowId) => {
  const response = await fetch('https://retoolapi.dev/khAESQ/data', {
    method: 'DELETE',
  });
  return response.json();
};