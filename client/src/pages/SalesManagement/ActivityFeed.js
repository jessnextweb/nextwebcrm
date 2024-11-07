// ActivityFeed.js
import React from 'react';

const ActivityFeed = ({ activities }) => {
  return (
    <div className="activity-feed bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="mb-2">
            <strong>{activity.event}:</strong> {activity.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;