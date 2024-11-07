// // AIAlertNotification.js
// import React, { useEffect, useState } from 'react';
// import { fetchAIAlerts } from '../../services/aiService';

// const AIAlertNotification = () => {
//   const [alerts, setAlerts] = useState([]);

//   useEffect(() => {
//     fetchAIAlerts().then(data => setAlerts(data));
//   }, []);

//   return (
//     <div className="ai-alert-notification bg-white p-4 shadow-md rounded-md">
//       <h2 className="text-lg font-semibold mb-4">AI-Powered Smart Alerts</h2>
//       <ul className="list-disc pl-5">
//         {alerts.map((alert, index) => (
//           <li key={index}>
//             {alert.message} - <span className="text-gray-500">{alert.priority}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AIAlertNotification;


// AIAlertNotification.js
import React, { useEffect, useState } from 'react';
import { fetchAIAlerts } from '../../services/aiService';

const AIAlertNotification = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchAIAlerts().then(data => setAlerts(data));
  }, []);

  return (
    <div className="ai-alert-notification bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">AI-Powered Smart Alerts</h2>
      <ul className="list-disc pl-5">
        {alerts.map((alert, index) => (
          <li key={index}>
            {alert.message} - <span className="text-gray-500">{alert.priority}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIAlertNotification;
