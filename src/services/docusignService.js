// docusignService.js

// Mocking the DocuSign service
const docusignLogin = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("User logged in to DocuSign");
        resolve(true); // Simulating a successful login
      }, 1000); // Simulate network delay
    });
  };
  

  const documentId = "dummy-123456"; // Dummy document ID

  return (
    <div className="service-page p-4">
      <h1 className="text-2xl font-bold mb-4">Document Signing Service</h1>
      <DocuSign documentId={documentId} />
    </div>
  );

  const sendDocumentForSigning = (documentId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (documentId) {
          console.log(`Document ${documentId} sent for signing.`);
          resolve(true); // Simulating a successful document send
        } else {
          reject(new Error("Document ID is required."));
        }
      }, 1000); // Simulate network delay
    });
  };
  
  export { docusignLogin, sendDocumentForSigning };
  