import React, { useState } from "react";
import './index.css'

const AppSettings = () => {
  const [settings, setSettings] = useState([]);
  const [theme, setTheme] = useState("");
  const [notifications, setNotifications] = useState("");
  const [language, setLanguage] = useState("");

  const handleSettings = () => {
    const newSettings = {
      theme: theme,
      notifications: notifications,
      language: language
    };

    setSettings(s => [...s, newSettings]);
  };

  const handleDeleteSetting = (indexToRemove) => {
    setSettings(settings.filter((_, index) => index !== indexToRemove));
  };

  const handleResetInputs = () => {
    setTheme("");
    setNotifications("");
    setLanguage("");
  };

  return (
    <>
      <h2>Settings List</h2>
      <ul>
        {settings.map((setting, index) => (
          <li key={index}>
            Theme: {setting.theme}, Notifications: {setting.notifications}, Language: {setting.language}
            <button onClick={() => handleDeleteSetting(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <input type="text" placeholder="Theme" value={theme} onChange={e => setTheme(e.target.value)} /> <br />
      <input type="text" placeholder="Notification" value={notifications} onChange={e => setNotifications(e.target.value)} /> <br />
      <input type="text" placeholder="Language" value={language} onChange={e => setLanguage(e.target.value)} /> <br />
      <button onClick={handleSettings}>Set settings</button>
      <button onClick={handleResetInputs}>Reset Inputs</button>
    </>
  );
};

export default AppSettings;