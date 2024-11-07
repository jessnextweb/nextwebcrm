// PushNotification.js
import React, { useEffect } from 'react';
import { messaging } from '../services/pushService';

const PushNotification = () => {
  useEffect(() => {
    messaging.onMessage((payload) => {
      alert(`New Push Notification: ${payload.notification.title} - ${payload.notification.body}`);
    });
  }, []);

  return (
    <div className="push-notification bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Push Notifications</h2>
      <p>Push notifications will appear here and on mobile devices.</p>
    </div>
  );
};

export default PushNotification;