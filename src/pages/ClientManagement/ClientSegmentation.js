// ClientSegmentation.js
import React from 'react';

const ClientSegmentation = () => {
  const segments = ['High-Value', 'New Clients', 'Returning', 'Low Engagement'];

  return (
    <div className="client-segmentation bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Client Segmentation</h2>
      <ul>
        {segments.map(segment => (
          <li key={segment}>{segment}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientSegmentation;