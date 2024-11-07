// SubscriptionDetails.js
import React, { useEffect, useState } from 'react';
import { fetchSubscriptionDetails } from '../../services/billingService';

const SubscriptionDetails = () => {
  const [subscription, setSubscription] = useState({ plan: '', renewalDate: '', cost: '' });

  useEffect(() => {
    fetchSubscriptionDetails().then((data) => setSubscription(data));
  }, []);

  return (
    <div className="subscription-details bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Subscription Details</h2>
      <p><strong>Plan:</strong> {subscription.plan}</p>
      <p><strong>Renewal Date:</strong> {subscription.renewalDate}</p>
      <p><strong>Cost:</strong> ${subscription.cost} per month</p>
    </div>
  );
};

export default SubscriptionDetails;