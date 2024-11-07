// milestoneService.js

export const fetchMilestones = async () => [
    { name: 'Design Phase', deadline: '2024-10-20', status: 'Pending' },
    { name: 'Development Phase', deadline: '2024-11-10', status: 'Pending' },
  ];
  
  export const addMilestone = async (milestone) => {
    console.log('Milestone Added:', milestone);
  };