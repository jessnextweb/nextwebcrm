// UpgradeSubscription.js
import React, { useState } from 'react';
import { upgradeSubscription } from '../../services/billingService';

const UpgradeSubscription = () => {
  const [newPlan, setNewPlan] = useState('');

  const handleUpgrade = async () => {
    const success = await upgradeSubscription(newPlan);
    if (success) {
      alert('Subscription upgraded successfully!');
    } else {
      alert('Error upgrading subscription.');
    }
  };

  return (
    <div className="upgrade-subscription bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Upgrade Subscription</h2>
      <div className="mb-4">
        <label className="block mb-2">Choose New Plan:</label>
        <select
          value={newPlan}
          onChange={(e) => setNewPlan(e.target.value)}
          className="block w-full p-2 border rounded"
        >
          <option value="">Select Plan</option>
          <option value="Standard">Standard - $10/month</option>
          <option value="Premium">Premium - $20/month</option>
          <option value="Enterprise">Enterprise - $50/month</option>
        </select>
      </div>
      <button onClick={handleUpgrade} className="bg-green-500 text-white p-2 rounded">
        Upgrade Subscription
      </button>
    </div>
  );
};

export default UpgradeSubscription;