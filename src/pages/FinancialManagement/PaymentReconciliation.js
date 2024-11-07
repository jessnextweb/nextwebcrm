// PaymentReconciliation.js
import React, { useState } from 'react';
import { reconcilePayments } from '../../services/paymentService';

const PaymentReconciliation = () => {
  const [reconciliationStatus, setReconciliationStatus] = useState('');

  const handleReconciliation = async () => {
    const response = await reconcilePayments();
    setReconciliationStatus(response.status);
  };

  return (
    <div className="payment-reconciliation bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Automated Payment Reconciliation</h2>
      <button
        onClick={handleReconciliation}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Reconcile Payments
      </button>
      {reconciliationStatus && <p className="mt-4">{reconciliationStatus}</p>}
    </div>
  );
};

export default PaymentReconciliation;