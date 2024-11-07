// GeneralSettings.js
import React, { useState, useEffect } from 'react';
import { fetchSettings, updateSettings } from '../../services/settingsService';

const GeneralSettings = () => {
  const [settings, setSettings] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    address: '',
    contactDetails: '',
    language: 'English',
    timezone: 'UTC',
    theme: 'light',
  });

  useEffect(() => {
    // Check if there are settings in localStorage
    const savedSettings = localStorage.getItem('generalSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    } else {
      // If no settings are in localStorage, fetch from the server
      fetchSettings().then((data) => setSettings(data));
    }
  }, []);

  const handleInputChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const toggleTheme = () => {
    setSettings({ ...settings, theme: settings.theme === 'light' ? 'dark' : 'light' });
  };

  const saveSettings = () => {
    // Save settings to backend (if needed)
    updateSettings(settings).then((response) => {
      console.log('Settings updated:', response);
    });
    
    // Save settings to localStorage
    localStorage.setItem('generalSettings', JSON.stringify(settings));
    console.log('Settings saved to localStorage');
  };

  return (
    <div className={`general-settings ${settings.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-4 shadow-md rounded-md`}>
      <h2 className="text-lg font-semibold mb-4">General Settings</h2>

      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={settings.name}
          onChange={handleInputChange}
          className="block mb-4 p-2 border"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={settings.email}
          onChange={handleInputChange}
          className="block mb-4 p-2 border"
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={settings.phone}
          onChange={handleInputChange}
          className="block mb-4 p-2 border"
        />
      </div>
      <div>
        <label>Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={settings.companyName}
          onChange={handleInputChange}
          className="block mb-4 p-2 border"
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={settings.address}
          onChange={handleInputChange}
          className="block mb-4 p-2 border"
        />
      </div>
      <div>
        <label>Contact Details:</label>
        <input
          type="text"
          name="contactDetails"
          value={settings.contactDetails}
          onChange={handleInputChange}
          className="block mb-4 p-2 border"
        />
      </div>
      <div>
        <label>Language:</label>
        <select
          name="language"
          value={settings.language}
          onChange={handleInputChange}
          className="block mb-4 p-2 border"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
      <div>
        <label>Timezone:</label>
        <select
          name="timezone"
          value={settings.timezone}
          onChange={handleInputChange}
          className="block mb-4 p-2 border"
        >
          <option value="UTC">UTC</option>
          <option value="EST">Eastern Standard Time (EST)</option>
          <option value="PST">Pacific Standard Time (PST)</option>
        </select>
      </div>
      <div className="mt-4">
        <label>Theme:</label>
        <button 
          onClick={toggleTheme}
          className={`ml-2 p-2 rounded-md ${settings.theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'}`}
        >
          {settings.theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
      <button onClick={saveSettings} className="bg-blue-500 text-white p-2 rounded-md mt-4">
        Save Settings
      </button>
    </div>
  );
};

export default GeneralSettings;
