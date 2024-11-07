// ClientSegmentation.js
import React, { useState, useEffect } from 'react';
import { fetchClientsBySegment } from '../../services/clientService';

const ClientSegmentation = () => {
  const [segment, setSegment] = useState('Demographics');
  const [segmentedClients, setSegmentedClients] = useState([]);

  useEffect(() => {
    fetchClientsBySegment(segment).then((data) => setSegmentedClients(data));
  }, [segment]);

  const handleSegmentChange = (e) => {
    setSegment(e.target.value);
  };

  return (
    <div className="client-segmentation bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Client Segmentation</h2>
      <select
        value={segment}
        onChange={handleSegmentChange}
        className="p-2 border rounded-md mb-4"
      >
        <option value="Demographics">Demographics</option>
        <option value="Industry">Industry</option>
      </select>

      <table className="min-w-full bg-white shadow-md rounded-md">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Segment</th>
          </tr>
        </thead>
        <tbody>
          {segmentedClients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{segment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientSegmentation;