import React, { useState } from 'react';
import PaymentOverviewForm from './PaymentOverviewForm';
import RealTimePaymentUpdates from './RealTimePaymentUpdates';
import PaymentReconciliation from './PaymentReconciliation';

const PaymentsOverview = () => {
  const [payments, setPayments] = useState([]);

  const addPayment = (payment) => {
    setPayments([...payments, payment]);
  };

  return (
    <div className="payments-overview bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Payments Overview</h2>
      
      {/* Form to add payments */}
      <PaymentOverviewForm addPayment={addPayment} />
      
      {/* Real-time updates */}
      <RealTimePaymentUpdates />
      
      {/* Reconciliation feature */}
      <PaymentReconciliation />
      
      {/* Display the list of payments */}
      <h3 className="text-md font-semibold mt-6 mb-2">Payments List:</h3>
      <ul>
        {payments.length > 0 ? (
          payments.map((payment, index) => (
            <li key={index} className="p-2 border-b">
              <strong>Method:</strong> {payment.method}, <strong>Amount:</strong> ${payment.amount}, 
              <strong>Date:</strong> {payment.date}, <strong>Status:</strong> {payment.status}
            </li>
          ))
        ) : (
          <li>No payments added yet.</li>
        )}
      </ul>
    </div>
  );
};

export default PaymentsOverview;
