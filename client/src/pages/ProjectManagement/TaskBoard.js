// TaskBoard.js
import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import ProjectModal from './ProjectModal';
import { getTasks } from '../../services/taskService';

const TaskBoard = () => {
  // Local state to manage tasks
  const [tasks, setTasks] = useState([]);

  const taskCategories = ['To-do', 'In-progress', 'Completed'];

  // Define colors for each category
  const categoryColors = {
    'To-do': 'bg-blue-200',
    'In-progress': 'bg-yellow-200',
    'Completed': 'bg-green-200', // Light green
  };

  // Fetch tasks when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const getTasksByStatus = (status) =>
    tasks.filter((task) => task.status === status);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
  
    // Check if dropped outside the list or in the same place
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }
  
    // Find the dragged task
    const draggedTask = tasks.find((task) => task.id.toString() === result.draggableId);
  
    if (!draggedTask) return; // Ensure task exists
  
    // Update the status of the dragged task
    const updatedTasks = tasks.map((task) =>
      task.id === draggedTask.id ? { ...task, status: destination.droppableId } : task
    );
  
    // Update state
    setTasks(updatedTasks);
  };
  

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal">
        {(provided) => (
          <div
            className="task-board grid grid-cols-3 gap-4"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {taskCategories.map((category) => (
              <Droppable key={category} droppableId={category}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`task-column p-4 rounded-lg ${categoryColors[category]}`}
                  >
                    <h2 className="text-lg font-bold">{category}</h2>
                    {getTasksByStatus(category).map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="task-item bg-white p-2 rounded mt-2 shadow-md"
                      >
                        <p>{task.name}</p>
                        <small>Priority: {task.priority}</small>
                      </div>
                    )}
                  </Draggable>
                  
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        )}
      </Droppable>
      <ProjectModal />
    </DragDropContext>
  );
};

export default TaskBoard;
