// IntegrationSettings.js
import React, { useState, useEffect } from 'react';
import { fetchIntegrations, updateIntegrationStatus } from '../../services/integrationService';

const IntegrationSettings = () => {
  const [integrations, setIntegrations] = useState([]);

  useEffect(() => {
    const getIntegrations = async () => {
      const fetchedIntegrations = await fetchIntegrations();
      setIntegrations(fetchedIntegrations);
    };
    getIntegrations();
  }, []);

  const toggleIntegrationStatus = async (integrationId, enabled) => {
    const updatedIntegration = await updateIntegrationStatus(integrationId, !enabled);
    setIntegrations((prev) =>
      prev.map((integration) =>
        integration.id === integrationId
          ? { ...integration, enabled: updatedIntegration.enabled }
          : integration
      )
    );
  };

  return (
    <div className="integration-settings bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Manage Integrations</h2>
      <ul>
        {integrations.map((integration) => (
          <li key={integration.id} className="mb-4 flex justify-between items-center">
            <span>{integration.name}</span>
            <button
              onClick={() => toggleIntegrationStatus(integration.id, integration.enabled)}
              className={`${
                integration.enabled ? 'bg-green-500' : 'bg-gray-500'
              } text-white px-4 py-2 rounded`}
            >
              {integration.enabled ? 'Enabled' : 'Disabled'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntegrationSettings;