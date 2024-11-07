import React, { useState, useEffect } from 'react';
import { fetchCampaigns, createCampaign } from '../../services/campaignService';

const CampaignManagement = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState({ name: '', type: '', segment: '' });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCampaigns().then((data) => {
      console.log("fetched campaigns", data);
      setCampaigns(data);
  });
  }, []);

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // console.log(`Input change - ${name}:`, value); 
    setNewCampaign({ ...newCampaign, [e.target.name]: e.target.value });
  };

  const handleCreateCampaign = () => {
    if (newCampaign.name && newCampaign.type && newCampaign.segment) {
      console.log("Creating campaign:", newCampaign);
      createCampaign(newCampaign).then((createdCampaign) => {
        if (createdCampaign) {
          console.log("test camp",createdCampaign)
          setCampaigns([...campaigns, createdCampaign]);
          setNewCampaign({ name: '', type: '', segment: '' });
        }
      });
    } else {
      alert('Please fill in all fields before creating a campaign.');
    }
  };

  // Filter campaigns based on the search query
  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log("filtered campaign",filteredCampaigns);

  return (
    <div className="campaign-management bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Manage Campaigns</h2>
      
      <div className="mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search Campaign Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-md mb-4"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Campaign Name"
          value={newCampaign.name}
          onChange={handleInputChange}
          className="p-2 border rounded-md"
        />
        <select
          name="type"
          value={newCampaign.type}
          onChange={handleInputChange}
          className="p-2 border rounded-md ml-4"
        >
          <option value="">Select Campaign Type</option>
          <option value="Email">Email</option>
          <option value="SMS">SMS</option>
          <option value="Social Media">Social Media</option>
        </select>
        <input
          type="text"
          name="segment"
          placeholder="Campaign Segment"
          value={newCampaign.segment}
          onChange={handleInputChange}
          className="p-2 border rounded-md ml-4"
        />
        <button
          onClick={handleCreateCampaign}
          className="bg-blue-500 text-white p-2 rounded-md ml-4"
        >
          Create Campaign
        </button>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Campaign Name</th>
            <th>Type</th>
            <th>Segment</th>
          </tr>
        </thead>
        <tbody>
          {filteredCampaigns.map((campaign, index) => (
            <tr key={index}>
              <td>{campaign.name}</td>
              <td>{campaign.type}</td>
              <td>{campaign.segment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignManagement;
