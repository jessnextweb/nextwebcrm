import React, { useState, useEffect } from 'react';
import OpportunityDetailsModal from './OpportunityDetailsModal';
import { fetchOpportunities } from '../../services/opportunityService';
import PipelineManagement from './PipelineManagement';
import Sidebarsal from './Sidebarsal';
import Header from '../../components/Header';



const OpportunitiesTable = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchOpportunities().then((data) => setOpportunities(data));
  }, []);

  const openModal = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOpportunity(null);
    setIsModalOpen(false);
  };

  return (
  
    <div className="opportunities-table bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-6">Opportunities Management</h2>
      <table className="min-w-full bg-white shadow-md rounded-md">
        <thead>
          <tr>
            <th>Opportunity Name</th>
            <th>Value</th>
            <th>Stage</th>
            <th>Expected Close Date</th>
            <th>Win Probability</th>
            <th>Assigned Sales Rep</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {opportunities.map((opportunity) => (
            <tr key={opportunity.id}>
              <td>{opportunity.name}</td>
              <td>${opportunity.value}</td>
              <td>{opportunity.stage}</td>
              <td>{opportunity.closeDate}</td>
              <td>{opportunity.winProbability}%</td>
              <td>{opportunity.assignedRep}</td>
              <td>
                <button
                  onClick={() => openModal(opportunity)}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  View/Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <OpportunityDetailsModal
          opportunity={selectedOpportunity}
          closeModal={closeModal}
        />
      )}
    </div>
   
  );
};

export default OpportunitiesTable;