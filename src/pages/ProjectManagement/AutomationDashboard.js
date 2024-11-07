// AutomationDashboard.js
import React from 'react';
import AutomationSettings from './AutomationSettings';
import WorkflowManager from './WorkflowManager';
import TaskNotifications from './TaskNotifications';
import EmailReminders from './EmailReminders';

const AutomationDashboard = () => {
  return (
    <div className="automation-dashboard p-6">
      <h1 className="text-2xl font-bold mb-6">Automation & Workflow Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <AutomationSettings />
        <WorkflowManager />
        <TaskNotifications />
        <EmailReminders />
      </div>
    </div>
  );
};

export default AutomationDashboard;