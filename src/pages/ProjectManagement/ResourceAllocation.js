// ResourceAllocation.js
import React, { useState, useEffect } from 'react';
import { fetchResources, allocateResource } from '../../services/resourceService';

const ResourceAllocation = () => {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState('');
  const [allocation, setAllocation] = useState({ employee: '', equipment: '' });

  useEffect(() => {
    fetchResources().then(setResources);
  }, []);

  const handleAllocate = () => {
    allocateResource(allocation).then(() => alert('Resource Allocated!'));
  };

  return (
    <div className="resource-allocation bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Resource Allocation</h2>
      <div className="mb-4">
        <label>Employee:</label>
        <input
          type="text"
          value={allocation.employee}
          onChange={(e) => setAllocation({ ...allocation, employee: e.target.value })}
          className="p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label>Equipment:</label>
        <input
          type="text"
          value={allocation.equipment}
          onChange={(e) => setAllocation({ ...allocation, equipment: e.target.value })}
          className="p-2 border rounded-md"
        />
      </div>
      <button onClick={handleAllocate} className="bg-blue-500 text-white p-2 rounded-md">
        Allocate Resource
      </button>
    </div>
  );
};

export default ResourceAllocation;