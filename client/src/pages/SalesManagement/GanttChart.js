// SalesManagement.js
import React from 'react';
import { Gantt } from 'gantt-task-react'; // Correct import
import 'gantt-task-react/dist/index.css';


const tasks = [
  {
    id: '1',
    name: 'Task 1',
    start: new Date(2024, 9, 1),
    end: new Date(2024, 9, 5),
    progress: 50,
    dependencies: [],
  },
  {
    id: '2',
    name: 'Task 2',
    start: new Date(2024, 9, 6),
    end: new Date(2024, 9, 12),
    progress: 20,
    dependencies: ['1'],
  },
];

const SalesManagement = () => {
  return (
 
    <div>
      <h1>Sales Management Gantt Chart</h1>
      <Gantt tasks={tasks} />
    </div>
 
  );
};

export default SalesManagement;
