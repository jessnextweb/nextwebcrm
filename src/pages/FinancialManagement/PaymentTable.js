// PaymentTable.js
import React from 'react';

const PaymentTable = ({ payments }) => {
  return (
    <div className="payment-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Payments Overview</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Payment Method</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.method}</td>
              <td>${payment.amount}</td>
              <td>{payment.date}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;