export const fetchTasks = async () => [
    { name: 'Design Wireframes', assigned: 'Alice', status: 'Pending' },
  ];

// taskService.js

export const getTasks = async () => {
    // Simulating an API call
    return [
      { id: 1, name: 'Task 1', description: 'Task 1 description', status: 'To-Do' },
      { id: 2, name: 'Task 2', description: 'Task 2 description', status: 'In Progress' },
      { id: 3, name: 'Task 3', description: 'Task 3 description', status: 'Completed' },
      { id: 4, name: 'Task 4', description: 'Task 4 description', status: 'To-Do' },
    ];
  };
  
  // taskService.js

// Sample data to simulate fetching tasks from an API
let tasks = [
  { id: 1, name: 'Task 1', description: 'Description for Task 1', status: 'To-Do' },
  { id: 2, name: 'Task 2', description: 'Description for Task 2', status: 'In Progress' },
  { id: 3, name: 'Task 3', description: 'Description for Task 3', status: 'Completed' },
];



// Update task status
export const updateTaskStatus = async (taskId, newStatus) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks = tasks.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      resolve(tasks); // Return updated task list
    }, 500); // Simulate network delay
  });
};


//   // taskService.js
// const API_URL = 'https://jsonplaceholder.typicode.com/todos'; // Example public API

// export const getTasks = async () => {
//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();

//     // Transform the data if needed, for example:
//     return data.map((task) => ({
//       id: task.id,
//       name: `Task ${task.id}`, // Assuming you want to keep a similar structure
//       description: `Description for task ${task.id}`, // You can customize as needed
//       status: task.completed ? 'Completed' : 'To-Do', // Adjust based on your needs
//     }));
//   } catch (error) {
//     console.error('Failed to fetch tasks:', error);
//     return []; // Return an empty array or handle error as needed
//   }
// };
