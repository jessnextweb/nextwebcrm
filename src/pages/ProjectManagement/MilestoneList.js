// MilestoneList.js
import React from 'react';

const MilestoneList = ({ milestones }) => (
  <div className="milestone-list mt-4">
    <h3 className="text-xl font-semibold mb-2">Milestones</h3>
    {milestones.length > 0 ? (
      <ul>
        {milestones.map((milestone, index) => (
          <li key={index} className="p-2 border-b">
            <strong>{milestone.name}</strong> - {milestone.deadline} ({milestone.status})
          </li>
        ))}
      </ul>
    ) : (
      <p>No milestones added yet.</p>
    )}
  </div>
);

export default MilestoneList;
