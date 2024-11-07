import React, { useState } from 'react';

const PaymentOverviewForm = ({ addPayment }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    method: 'Stripe',
    amount: '',
    date: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addPayment(paymentDetails); // This will trigger the addPayment function in the parent
    setPaymentDetails({ method: 'Stripe', amount: '', date: '', status: 'Pending' }); // Optionally clear the form
  };

  return (
    <div className="payment-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Add Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Payment Method:</label>
          <select
            name="method"
            value={paymentDetails.method}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Stripe">Stripe</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={paymentDetails.amount}
            onChange={handleChange}
            placeholder="Enter Payment Amount"
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={paymentDetails.date}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Status:</label>
          <select
            name="status"
            value={paymentDetails.status}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentOverviewForm;
