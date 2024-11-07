// TaxManagement.js
import React, { useState } from 'react';
import TaxForm from './TaxForm';
import TaxSummary from './TaxSummary';
import { exportTaxReport } from '../../services/taxService';

const TaxManagement = () => {
  const [taxSummary, setTaxSummary] = useState(null);

  const handleExport = async () => {
    const reportURL = await exportTaxReport();
    const link = document.createElement('a');
    link.href = reportURL;
    link.setAttribute('download', 'tax_report.pdf');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="tax-management bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Tax Management</h2>
      <TaxForm setTaxSummary={setTaxSummary} />
      <TaxSummary taxSummary={taxSummary} />
      {taxSummary && (
        <button
          onClick={handleExport}
          className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
        >
          Export Tax Report
        </button>
      )}
    </div>
  );
};

export default TaxManagement;