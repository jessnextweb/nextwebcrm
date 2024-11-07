import React, { useEffect, useState } from 'react';
import { fetchBillingInfo } from '../../services/billingService';

const BillingInfo = () => {
  const [billingInfo, setBillingInfo] = useState({ address: '', city: '', postalCode: '', country: '' });

  useEffect(() => {
    fetchBillingInfo().then((data) => setBillingInfo(data));
  }, []);

  return (
    <div className="billing-info bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
      <p><strong>Address:</strong> {billingInfo.address}</p>
      <p><strong>City:</strong> {billingInfo.city}</p>
      <p><strong>Postal Code:</strong> {billingInfo.postalCode}</p>
      <p><strong>Country:</strong> {billingInfo.country}</p>
    </div>
  );
};

export default BillingInfo;