// AutomationSettings.js
import React, { useState } from 'react';

const AutomationSettings = () => {
  const [autoAssign, setAutoAssign] = useState(false);
  const [deadlineAlert, setDeadlineAlert] = useState(false);

  const handleSave = () => {
    console.log('Automation Settings Saved:', { autoAssign, deadlineAlert });
  };

  return (
    <div className="automation-settings bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Task Automation Settings</h2>
      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            checked={autoAssign}
            onChange={() => setAutoAssign(!autoAssign)}
          />
          Auto-Assign Tasks Based on Rules
        </label>
      </div>
      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            checked={deadlineAlert}
            onChange={() => setDeadlineAlert(!deadlineAlert)}
          />
          Enable Deadline Alerts
        </label>
      </div>
      <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded-md">
        Save Settings
      </button>
    </div>
  );
};

export default AutomationSettings;