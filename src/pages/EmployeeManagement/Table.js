// Table.js
import React from 'react';

const Table = ({ headers = [], data = [], onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            {headers.map((header, idx) => (
              <th key={idx} className="py-3 px-4 text-left border-b border-gray-300">
                {header}
              </th>
            ))}
            <th className="py-3 px-4 border-b border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="text-center hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-2 px-4 border-b border-gray-300">
                    {cell}
                  </td>
                ))}
                <td className="py-2 px-4 border-b border-gray-300">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => onEdit(rowIndex)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => onDelete(rowIndex)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length + 1} className="py-4 text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;



// // Table.js
// import React from 'react';

// const Table = () => {
//   // Define headers and data directly in the Table component
//   const headers = ["Name", "Email"];
//   const data = [
//     ["John Doe", "john@example.com"],
//     ["Jane Smith", "jane@example.com"],
//   ];

//   // Define the edit and delete handlers
//   const handleEdit = (index) => {
//     console.log("Edit row:", index);
//     // Add your edit logic here
//   };

//   const handleDelete = (index) => {
//     console.log("Delete row:", index);
//     // Add your delete logic here
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200 text-gray-700">
//             {headers.map((header, idx) => (
//               <th key={idx} className="py-3 px-4 text-left border-b border-gray-300">
//                 {header}
//               </th>
//             ))}
//             <th className="py-3 px-4 border-b border-gray-300">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((row, rowIndex) => (
//               <tr key={rowIndex} className="text-center hover:bg-gray-100">
//                 {row.map((cell, cellIndex) => (
//                   <td key={cellIndex} className="py-2 px-4 border-b border-gray-300">
//                     {cell}
//                   </td>
//                 ))}
//                 <td className="py-2 px-4 border-b border-gray-300">
//                   <button
//                     className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
//                     onClick={() => handleEdit(rowIndex)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-3 py-1 rounded"
//                     onClick={() => handleDelete(rowIndex)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={headers.length + 1} className="py-4 text-gray-500">
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
