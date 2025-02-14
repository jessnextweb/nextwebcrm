// // Modal.js
// import React from 'react';

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded shadow-lg">
//         <button className="absolute top-2 right-2" onClick={onClose}>
//           X
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg relative">
        <button 
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900" 
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
