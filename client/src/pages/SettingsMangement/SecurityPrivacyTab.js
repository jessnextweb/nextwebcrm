// SecurityPrivacyTab.js
import React from 'react';
import SecuritySettings from './SecuritySettings';
import PrivacySettings from './PrivacySettings';

const SecurityPrivacyTab = () => {
  return (
    <div className="security-privacy-tab bg-gray-50 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Security & Privacy Settings</h2>
      <SecuritySettings />
      <PrivacySettings />
    </div>
  );
};

export default SecurityPrivacyTab;