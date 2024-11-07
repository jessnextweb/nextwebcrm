// Automation.js
import React from 'react';
import Sidebarsal from './Sidebarsal';
import Header from '../../components/Header';

const Automation = () => {
  const createWorkflow = () => {
    // Define sales workflow
  };

  return (
 
    <div>
      <h2 className="text-lg mb-4">Sales Automation</h2>
      <button onClick={createWorkflow} className="bg-blue-500 text-white p-2 rounded">
        Create New Workflow
      </button>
    </div>
  
  );
};

export default Automation;