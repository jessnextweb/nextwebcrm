// Settings.js
import React from 'react';
import EmailTemplateForm from './EmailTemplateForm';
import RolePermissions from './RolePermissions';
import NotificationPreferences from './NotificationPreferences';
import ToolIntegrations from './ToolIntegrations';

const Settings = () => {
  return (
    <div className="settings bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      <div className="mb-6">
        <EmailTemplateForm />
      </div>
      <div className="mb-6">
        <RolePermissions />
      </div>
      <div className="mb-6">
        <NotificationPreferences />
      </div>
      <div>
        <ToolIntegrations />
      </div>
    </div>
  );
};

export default Settings;