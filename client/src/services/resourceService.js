// resourceService.js
export const fetchResources = async () => {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Excavator' },
    ];
  };
  
  export const allocateResource = async (allocation) => {
    console.log('Allocated:', allocation);
  };