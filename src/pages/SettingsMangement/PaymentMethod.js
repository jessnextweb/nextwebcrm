// PaymentMethod.js
import React, { useState } from 'react';
import { updatePaymentMethod } from '../../services/billingService';

const PaymentMethod = () => {
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });

  const handleInputChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentUpdate = async () => {
    const success = await updatePaymentMethod(paymentDetails);
    if (success) {
      alert('Payment method updated successfully!');
      setPaymentDetails({ cardNumber: '', expiryDate: '', cvv: '' });
    } else {
      alert('Error updating payment method.');
    }
  };

  return (
    <div className="payment-method bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Update Payment Method</h2>
      <div className="mb-4">
        <label className="block mb-2">Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={paymentDetails.cardNumber}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
          placeholder="Enter Card Number"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Expiry Date:</label>
        <input
          type="text"
          name="expiryDate"
          value={paymentDetails.expiryDate}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
          placeholder="MM/YY"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">CVV:</label>
        <input
          type="text"
          name="cvv"
          value={paymentDetails.cvv}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
          placeholder="Enter CVV"
        />
      </div>
      <button onClick={handlePaymentUpdate} className="bg-blue-500 text-white p-2 rounded">
        Update Payment Method
      </button>
    </div>
  );
};

export default PaymentMethod;