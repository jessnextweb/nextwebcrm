// // FileUpload.js
// import React, { useState } from 'react';

// const FileUpload = ({ onFileUpload }) => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (file) {
//       console.log("dfjkf")
//       onFileUpload(file);
//     }
//   };

//   return (
//     <div className="file-upload mt-4">
//       <input type="file" onChange={handleFileChange} className="input input-bordered" />
//       <button onClick={handleUpload} className="btn btn-primary mt-2">
//         Upload File
//       </button>
//     </div>
//   );
// };

// export default FileUpload;



// BulkUpload.js
import React, { useState } from 'react';
import { uploadClients } from '../../services/uploadService';

const BulkUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    const formData = new FormData();
    console.log()
    console.log('formData',formData)
    console.log('Selected file:', file);
    formData.append('file', file);
    console.log('Updated formData with file:', formData);
    uploadClients(formData).then(() => alert('Upload successful!'));
  };

  return (
    <div className="bulk-upload bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Bulk Data Upload</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} className="block mb-4" />
      <button onClick={handleUpload} className="bg-blue-500 text-white p-2 rounded">
        Upload
      </button>
    </div>
  );
};

export default BulkUpload;
