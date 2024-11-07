// InvoicingTable.js
import React, { useState, useEffect } from 'react';
import { fetchInvoices } from '../../services/invoiceService';

const InvoicingTable = () => {
  const [invoices, setInvoices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchInvoices().then((data) => setInvoices(data));
  }, []);

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.clientName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search invoices"
        className="mb-4 p-2 border"
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.number}</td>
              <td>{invoice.clientName}</td>
              <td>${invoice.amount}</td>
              <td>{invoice.dueDate}</td>
              <td>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicingTable;
