// TaxSummary.js
import React from 'react';

const TaxSummary = ({ taxSummary }) => {
  return (
    <div className="tax-summary bg-white p-4 shadow-md rounded-md mt-6">
      <h3 className="font-medium mb-4">Tax Summary</h3>
      {taxSummary ? (
        <div>
          <p><strong>Taxable Income:</strong> ${taxSummary.taxableIncome}</p>
          <p><strong>Deductions:</strong> ${taxSummary.deductions}</p>
          <p><strong>Tax Amount:</strong> ${taxSummary.taxAmount}</p>
          <p><strong>Total Tax:</strong> ${taxSummary.totalTax}</p>
        </div>
      ) : (
        <p>No tax details available. Please calculate the tax first.</p>
      )}
    </div>
  );
};

export default TaxSummary;