// Settings.jsx
import { useState, useEffect } from 'react';
import './Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: false,
    darkMode: false,
    language: 'en',
    privacyLevel: 'public',
    twoFactorAuth: false,
  });

  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem('userSettings'));
    if (storedSettings) {
      setSettings(storedSettings);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userSettings', JSON.stringify(settings));
    alert('Settings updated successfully!');
  };

  return (
    <div className="settings">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="setting-group">
          <label>
            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleChange}
            />
            Receive email notifications
          </label>
        </div>

        <div className="setting-group">
          <label>
            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
            />
            Enable dark mode
          </label>
        </div>

        <div className="setting-group">
          <label htmlFor="language">Preferred Language:</label>
          <select
            id="language"
            name="language"
            value={settings.language}
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>

        <div className="setting-group">
          <label htmlFor="privacyLevel">Privacy Level:</label>
          <select
            id="privacyLevel"
            name="privacyLevel"
            value={settings.privacyLevel}
            onChange={handleChange}
          >
            <option value="public">Public</option>
            <option value="friends">Friends Only</option>
            <option value="private">Private</option>
          </select>
        </div>

        <div className="setting-group">
          <label>
            <input
              type="checkbox"
              name="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onChange={handleChange}
            />
            Enable Two-Factor Authentication
          </label>
        </div>

        <button type="submit" className="save-button">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;