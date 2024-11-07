// ToolIntegrations.js
import React, { useState, useEffect } from 'react';
import { fetchIntegrations, saveIntegrationSettings } from '../../services/integrationService';

const ToolIntegrations = () => {
  const [integrations, setIntegrations] = useState({
    crm: 'Salesforce',
    emailProvider: 'Gmail',
    paymentGateway: 'Stripe',
  });

  useEffect(() => {
    fetchIntegrations().then((data) => setIntegrations(data));
  }, []);

  const handleIntegrationChange = (e) => {
    setIntegrations({
      ...integrations,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveIntegration = async () => {
    try {
      const savedData = await saveIntegrationSettings(integrations);
      alert('Integration settings saved successfully!');
      console.log('Saved Data:', savedData); // Log saved data for reference
    } catch (error) {
      console.error('Save Integration Error:', error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="tool-integrations bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Manage External Tool Integrations</h2>
      <div className="mb-4">
        <label>CRM Tool:</label>
        <select
          name="crm"
          value={integrations.crm}
          onChange={handleIntegrationChange}
          className="p-2 border rounded-md ml-4"
        >
          <option value="Salesforce">Salesforce</option>
          <option value="HubSpot">HubSpot</option>
        </select>
      </div>
      <div className="mb-4">
        <label>Email Provider:</label>
        <select
          name="emailProvider"
          value={integrations.emailProvider}
          onChange={handleIntegrationChange}
          className="p-2 border rounded-md ml-4"
        >
          <option value="Gmail">Gmail</option>
          <option value="Outlook">Outlook</option>
        </select>
      </div>
      <div className="mb-4">
        <label>Payment Gateway:</label>
        <select
          name="paymentGateway"
          value={integrations.paymentGateway}
          onChange={handleIntegrationChange}
          className="p-2 border rounded-md ml-4"
        >
          <option value="Stripe">Stripe</option>
          <option value="PayPal">PayPal</option>
        </select>
      </div>
      <button
        onClick={handleSaveIntegration}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Save Integration Settings
      </button>
    </div>
  );
};

export default ToolIntegrations;





// // ToolIntegrations.js
// import React, { useState, useEffect } from 'react';
// import { fetchIntegrations, saveIntegrationSettings } from '../../services/integrationService';

// const ToolIntegrations = () => {
//   const [integrations, setIntegrations] = useState({
//     crm: 'Salesforce',
//     emailProvider: 'Gmail',
//     paymentGateway: 'Stripe',
//   });

//   useEffect(() => {
//     fetchIntegrations().then((data) => setIntegrations(data));
//   }, []);

//   const handleIntegrationChange = (e) => {
//     setIntegrations({
//       ...integrations,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSaveIntegration = async () => {
//     try {
//       const savedData = await saveIntegrationSettings(integrations);
//       alert('Integration settings saved successfully!');
//       console.log('Saved Data:', savedData); // Log saved data for reference
//     } catch (error) {
//       console.error('Save Integration Error:', error);
//       alert(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="tool-integrations bg-white p-4 shadow-md rounded-md">
//       <h2 className="text-lg font-semibold mb-4">Manage External Tool Integrations</h2>
//       <div className="mb-4">
//         <label>CRM Tool:</label>
//         <select
//           name="crm"
//           value={integrations.crm}
//           onChange={handleIntegrationChange}
//           className="p-2 border rounded-md ml-4"
//         >
//           <option value="Salesforce">Salesforce</option>
//           <option value="HubSpot">HubSpot</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label>Email Provider:</label>
//         <select
//           name="emailProvider"
//           value={integrations.emailProvider}
//           onChange={handleIntegrationChange}
//           className="p-2 border rounded-md ml-4"
//         >
//           <option value="Gmail">Gmail</option>
//           <option value="Outlook">Outlook</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label>Payment Gateway:</label>
//         <select
//           name="paymentGateway"
//           value={integrations.paymentGateway}
//           onChange={handleIntegrationChange}
//           className="p-2 border rounded-md ml-4"
//         >
//           <option value="Stripe">Stripe</option>
//           <option value="PayPal">PayPal</option>
//         </select>
//       </div>
//       <button
//         onClick={handleSaveIntegration}
//         className="bg-blue-500 text-white p-2 rounded-md"
//       >
//         Save Integration Settings
//       </button>
//     </div>
//   );
// };

// export default ToolIntegrations;
