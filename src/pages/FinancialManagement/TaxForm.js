// TaxForm.js
import React, { useState } from 'react';
import { calculateTax } from '../../services/taxService';

const TaxForm = ({ setTaxSummary }) => {
  const [taxDetails, setTaxDetails] = useState({
    taxableIncome: '',
    deductions: '',
    taxRate: '',
    taxYear: '',
    filingStatus: 'Single',
  });

  const handleChange = (e) => {
    setTaxDetails({ ...taxDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taxSummary = await calculateTax(taxDetails);
    setTaxSummary(taxSummary);
  };

  return (
    <div className="tax-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Tax Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Taxable Income:</label>
          <input
            type="number"
            name="taxableIncome"
            value={taxDetails.taxableIncome}
            onChange={handleChange}
            placeholder="Enter taxable income"
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Deductions:</label>
          <input
            type="number"
            name="deductions"
            value={taxDetails.deductions}
            onChange={handleChange}
            placeholder="Enter deductions"
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Tax Rate (%):</label>
          <input
            type="number"
            name="taxRate"
            value={taxDetails.taxRate}
            onChange={handleChange}
            placeholder="Enter tax rate"
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Tax Year:</label>
          <input
            type="number"
            name="taxYear"
            value={taxDetails.taxYear}
            onChange={handleChange}
            placeholder="Enter tax year"
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Filing Status:</label>
          <select
            name="filingStatus"
            value={taxDetails.filingStatus}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="Single">Single</option>
            <option value="Married Filing Jointly">Married Filing Jointly</option>
            <option value="Married Filing Separately">Married Filing Separately</option>
            <option value="Head of Household">Head of Household</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Calculate Tax
        </button>
      </form>
    </div>
  );
};

export default TaxForm;