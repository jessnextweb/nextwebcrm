// DocuSign.js
import React, { useState } from 'react';


// Mocked service functions
const docusignLogin = async () => {
  console.log("Logged in to DocuSign (dummy function)");
};

const sendDocumentForSigning = async (documentId) => {
  if (!documentId) {
    throw new Error("Document ID is required");
  }
  console.log(`Document ${documentId} sent for signing (dummy function)`);
};

const DocuSign = () => {
  const [signature, setSignature] = useState('');
  
 
  const documentId = "dummy-123456"; 

  const generateDummySignature = () => {
    
    const signatures = [
      `Chandraleka (Document ID: ${documentId})`,
      `Daphne (Document ID: ${documentId})`,
      `Ram (Document ID: ${documentId})`,
      `Keerthana (Document ID: ${documentId})`,
    ];
    const randomSignature = signatures[Math.floor(Math.random() * signatures.length)];
    return randomSignature;
  };

  const handleSignDocument = async () => {
    try {
      await docusignLogin();
      await sendDocumentForSigning(documentId);
      const dummySignature = generateDummySignature();
      setSignature(dummySignature);
      alert(`Document ${documentId} sent for signing successfully!`);
      alert(`Dummy Signature: ${dummySignature}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
 
    <div className="docusign bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Sign Document</h2>
      <button
        onClick={handleSignDocument}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Send for E-Signature
      </button>
      {signature && (
        <div className="mt-4">
          <h3 className="font-semibold">Generated Signature:</h3>
          <p>{signature}</p>
        </div>
      )}
    </div>
   
  );
};

export default DocuSign;
