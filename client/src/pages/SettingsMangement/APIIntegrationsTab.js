import React from 'react';
import APIIntegrationForm from './APIIntegrationForm';
import IntegrationSettings from './IntegrationSettings';

const APIIntegrationsTab = () => {
  return (
    <div className="api-integrations-tab bg-gray-50 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">API & Integrations</h2>
      <APIIntegrationForm />
      <IntegrationSettings />
    </div>
  );
};

export default APIIntegrationsTab;