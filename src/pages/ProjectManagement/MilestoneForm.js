// MilestoneForm.js
import React, { useState } from 'react';

const MilestoneForm = ({ addMilestone }) => {
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMilestone({ name, deadline, status: 'Pending' });
    console.log(typeof addMilestone); 
    setName('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="milestone-form bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Add New Milestone</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Milestone Name"
        className="block mb-4 p-2 border rounded-md w-full"
        required
      />
      <input 
       type="Text"
       value={name}
       onChange={(e)=>setName(e.target.value)}
       placeholder="milestone Name"
       className="block mb-4 p-2 border rounded-md w-full"
       required
       />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="block mb-4 p-2 border rounded-md w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
        Add Milestone
      </button>
    </form>
  );
};

export default MilestoneForm;