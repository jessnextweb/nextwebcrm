// uploadService.js
export const uploadClients = async (formData) => {
    try {
      const response = await fetch('https://retoolapi.dev/267XeL/data', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('File upload failed');
      }
  
      return await response.json(); // assuming the API returns a JSON response
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };
  