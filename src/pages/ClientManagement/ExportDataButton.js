// ExportDataButton.js
import React from 'react';
import { exportClientData } from '../../services/clientService';

const ExportDataButton = () => (
  <button onClick={exportClientData} className="bg-gray-500 text-white p-2 rounded-md">
    Export Data
  </button>
);

export default ExportDataButton;