import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage } from 'firebase/messaging';

// Your Firebase configuration (replace with your actual config details)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Messaging
const messaging = getMessaging(app);

// Function to handle incoming messages when the app is in the foreground
export const handleForegroundMessages = (callback) => {
  onMessage(messaging, (payload) => {
    console.log('Message received in foreground: ', payload);
    if (callback) {
      callback(payload);
    }
  });
};

export { messaging };
