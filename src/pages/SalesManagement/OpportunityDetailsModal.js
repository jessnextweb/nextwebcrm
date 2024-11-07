// OpportunityDetailsModal.js
import React, { useState } from 'react';

const OpportunityDetailsModal = ({ opportunity, closeModal }) => {
  const [opportunityDetails, setOpportunityDetails] = useState(opportunity);

  const handleChange = (e) => {
    setOpportunityDetails({
      ...opportunityDetails,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
    // Save opportunity details (via API)
    console.log('Saving opportunity details:', opportunityDetails);
    closeModal();
  };

  return (
    <div className="modal bg-gray-900 bg-opacity-50 fixed inset-0 flex justify-center items-center">
      <div className="modal-content bg-white p-6 rounded-md">
        <h3 className="text-lg font-semibold mb-4">Opportunity Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={opportunityDetails.name}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Opportunity Name"
          />
          <input
            type="number"
            name="value"
            value={opportunityDetails.value}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Value ($)"
          />
          <input
            type="date"
            name="closeDate"
            value={opportunityDetails.closeDate}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Expected Close Date"
          />
          <select
            name="stage"
            value={opportunityDetails.stage}
            onChange={handleChange}
            className="p-2 border rounded-md"
          >
            <option value="Discovery">Discovery</option>
            <option value="Proposal">Proposal</option>
            <option value="Negotiation">Negotiation</option>
            <option value="Closed">Closed</option>
          </select>
          <input
            type="number"
            name="winProbability"
            value={opportunityDetails.winProbability}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Win Probability (%)"
          />
          <input
            type="text"
            name="assignedRep"
            value={opportunityDetails.assignedRep}
            onChange={handleChange}
            className="p-2 border rounded-md"
            placeholder="Assigned Sales Rep"
          />
        </div>
        <div className="mt-6 flex justify-end">
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

export default OpportunityDetailsModal;