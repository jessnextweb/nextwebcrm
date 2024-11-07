// import React from 'react';


// const AttendanceTable = ({ attendance = [] }) => {
//     return (
   
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Hours Worked</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendance.length > 0 ? (
//             attendance.map((record) => (
//               <tr key={record.id}>
//                 <td>{record.name}</td>
//                 <td>{record.date}</td>
//                 <td>{record.status}</td>
//                 <td>{record.hoursWorked}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No attendance data available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
     
//     );
//   };
  
//   export default AttendanceTable;


import React, { useEffect, useState } from 'react';
import { fetchAttendanceData } from '../../services/attendanceService'; 
const AttendanceTable = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAttendanceData = async () => {
      try {
        const data = await fetchAttendanceData();
        setAttendance(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAttendanceData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Status</th>
          <th>Hours Worked</th>
        </tr>
      </thead>
      <tbody>
        {attendance.length > 0 ? (
          attendance.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
              <td>{record.hoursWorked}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No attendance data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AttendanceTable;

  