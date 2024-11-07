// RiskForm.js
import React, { useState } from 'react';

const RiskForm = ({ addRisk }) => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Low');
  const [potentialImpact, setPotentialImpact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRisk({ name, priority, potentialImpact, status: 'Open' });
    setName('');
    setPriority('Low');
    setPotentialImpact('');
  };

  return (
    <form onSubmit={handleSubmit} className="risk-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Log New Risk</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Risk Name"
        className="block mb-4 p-2 border rounded-md w-full"
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="block mb-4 p-2 border rounded-md w-full"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <textarea
        value={potentialImpact}
        onChange={(e) => setPotentialImpact(e.target.value)}
        placeholder="Potential Impact"
        className="block mb-4 p-2 border rounded-md w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
        Add Risk
      </button>
    </form>
  );
};

export default RiskForm;