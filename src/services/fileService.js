export const uploadFile = async (file) => {
    console.log('File uploaded:', file);
  };
  
  export const fetchFiles = async () => [
    { name: 'ProjectPlan.pdf' },
    { name: 'DesignMockup.png' },
  ];
  
  export const fetchFileVersions = async (fileId) => [
    { number: 1, date: '2024-10-01' },
    { number: 2, date: '2024-10-05' },
  ];