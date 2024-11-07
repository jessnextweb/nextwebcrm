// TaskBoard.js
import React from 'react';


const TaskBoard = ({ tasks = [], updateTaskStatus }) => {
  const handleDragStart = (task) => {
    // Handle drag event
  };

  const handleDrop = (status) => {
    // Handle drop event
  };

  return (
    
    <div className="flex justify-between">
      {['To-Do', 'In Progress', 'Completed'].map(status => (
        <div key={status} className="w-1/3 p-4">
          <h2 className="text-xl">{status}</h2>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(status)}
            className="bg-gray-100 p-4 rounded"
          >
            {tasks.filter(task => task.status === status).map(task => (
              <div
                key={task.id}
                className="bg-white p-4 my-2 rounded shadow"
                draggable
                onDragStart={() => handleDragStart(task)}
              >
                <h3>{task.name}</h3>
                <p>{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  
  );
};

export default TaskBoard;
