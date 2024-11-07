

import React, { useState } from 'react';
import MilestoneForm from './MilestoneForm';
import MilestoneList from './MilestoneList';
import GanttChart from './GanttChart';
import MilestoneAlerts from './MilestoneAlerts';

const MilestoneDashboard = () => {
  const [milestones, setMilestones] = useState([]);

  const addMilestone = (milestone) => {
    setMilestones([...milestones, milestone]);
  };

  // Ensure the deadline exists and is properly formatted before using it
  const tasks = milestones.map((milestone, index) => {
    const endDate = milestone.deadline ? new Date(milestone.deadline) : new Date(); // Handle missing deadline
    return {
      id: index,
      name: milestone.name || `Milestone ${index + 1}`, // Fallback name
      start: new Date(), // Assuming all tasks start on the current date
      end: endDate,
      progress: milestone.status === 'Completed' ? 100 : 0, // Set progress based on status
    };
  });

  return (
    <div className="milestone-dashboard p-6">
      <h1 className="text-2xl font-bold mb-6">Milestones Tracking Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <MilestoneForm addMilestone={addMilestone} />
        <MilestoneList milestones={milestones} />
        {tasks.length > 0 && <GanttChart tasks={tasks} />} {/* Render GanttChart only if there are tasks */}
        <MilestoneAlerts milestones={milestones} />
      </div>
    </div>
  );
};

export default MilestoneDashboard;
