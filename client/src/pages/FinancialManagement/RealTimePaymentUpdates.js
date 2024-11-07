
// RealTimePaymentUpdates.js
import React, { useState, useEffect } from 'react';
import { fetchPayments } from '../../services/paymentService';
import PaymentTable from './PaymentTable';

const RealTimePaymentUpdates = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const getPayments = async () => {
      const data = await fetchPayments();
      setPayments(data);
    };

    getPayments();
    const interval = setInterval(getPayments, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="real-time-updates bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Real-Time Payment Updates</h2>
      <PaymentTable payments={payments} />
    </div>
  );
};

export default RealTimePaymentUpdates;
