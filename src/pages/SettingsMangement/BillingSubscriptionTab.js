// BillingSubscriptionTab.js
import React from 'react';
import BillingInfo from './BillingInfo';
import SubscriptionDetails from './SubscriptionDetails';
import PaymentMethod from './PaymentMethod';
import UpgradeSubscription from './UpgradeSubscription';

const BillingSubscriptionTab = () => {
  return (
    <div className="billing-subscription-tab bg-gray-50 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Billing & Subscription Management</h2>
      <BillingInfo />
      <SubscriptionDetails />
      <PaymentMethod />
      <UpgradeSubscription />
    </div>
  );
};

export default BillingSubscriptionTab;