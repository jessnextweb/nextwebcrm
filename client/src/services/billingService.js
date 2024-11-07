// billingService.js
export const fetchBillingInfo = async () => {
    const response = await fetch('/api/billing/info');
    return response.json();
  };
  
  export const updatePaymentMethod = async (paymentDetails) => {
    const response = await fetch('/api/billing/payment-method', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentDetails),
    });
    return response.json();
  };
  
  export const fetchSubscriptionDetails = async () => {
    const response = await fetch('/api/billing/subscription');
    return response.json();
  };
  
  export const upgradeSubscription = async (newPlan) => {
    const response = await fetch('/api/billing/upgrade', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan: newPlan }),
    });
    return response.json();
  };