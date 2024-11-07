// LeadDetailsModal.js
import React, { useState } from 'react';

const LeadDetailsModal = ({ lead, closeModal }) => {
  const [leadDetails, setLeadDetails] = useState(lead);

  const handleChange = (e) => {
    setLeadDetails({ ...leadDetails, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    // Save lead details (via API)
    console.log('Saving lead details:', leadDetails);
    closeModal();
  };

  return (
    <div className="modal bg-gray-900 bg-opacity-50 fixed inset-0 flex justify-center items-center">
      <div className="modal-content bg-white p-6 rounded-md">
        <h3 className="text-lg font-semibold mb-4">Lead Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={leadDetails.name}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Lead Name"
          />
          <input
            type="email"
            name="email"
            value={leadDetails.email}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Email"
          />
          <input
            type="text"
            name="phone"
            value={leadDetails.phone}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Phone"
          />
          <input
            type="text"
            name="source"
            value={leadDetails.source}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Lead Source"
          />
          <input
            type="text"
            name="score"
            value={leadDetails.score}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Lead Score"
          />
          <input
            type="text"
            name="owner"
            value={leadDetails.owner}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Lead Owner"
          />
          <select
            name="status"
            value={leadDetails.status}
            onChange={handleChange}
            className="p-2 border rounded-md"
          >
            <option value="New">New</option>
            <option value="Qualified">Qualified</option>
            <option value="Converted"></option>
          </select>
        </div>
        <div className="mt-6 flex ju
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        stifyConverted-end">
          <button
            onClick={closeModal}
            className="bg-gray-500 text-white p-2 rounded-md mr-4"
          >
            Cancel
          </button>
          <button
            onClick={saveChanges}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsModal;