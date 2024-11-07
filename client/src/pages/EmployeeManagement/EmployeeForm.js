// import React, { useState } from 'react';

// const EmployeeForm = ({ onSubmit, employee }) => {
//   const [formData, setFormData] = useState({
//     name: employee?.name || '',
//     email: employee?.email || '',
//     position: employee?.position || '',
//     status: employee?.status || 'Active',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label className="block text-gray-700">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="px-4 py-2 border rounded-md w-full"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="px-4 py-2 border rounded-md w-full"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Position</label>
//         <input
//           type="text"
//           name="position"
//           value={formData.position}
//           onChange={handleChange}
//           className="px-4 py-2 border rounded-md w-full"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Status</label>
//         <select
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//           className="px-4 py-2 border rounded-md w-full"
//         >
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//         </select>
//       </div>
//       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default EmployeeForm;