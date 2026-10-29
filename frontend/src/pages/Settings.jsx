
import { useState } from "react";
import { Moon, Sun, Bell, Monitor } from "lucide-react";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [compactView, setCompactView] = useState(false);
  const [message, setMessage] = useState("");

  function saveSettings() {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("compact-view", compactView);
    setMessage("Settings applied successfully!");
  }

  return (
    <section className="page-container">
      <div className="page-header">
        <div>
          <h1>Settings</h1>
          <p>Customize your Smart Campus 360 experience.</p>
        </div>
      </div>

      <section className="panel settings-panel">
        <h2>Appearance</h2>

        <div className="setting-row">
          <div className="setting-info">
            {darkMode ? <Moon size={22} /> : <Sun size={22} />}
            <div>
              <h3>Dark Mode</h3>
              <p>Use a darker appearance for the website.</p>
            </div>
          </div>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
        </div>

        <div className="setting-row">
          <div className="setting-info">
            <Monitor size={22} />
            <div>
              <h3>Compact View</h3>
              <p>Reduce spacing between cards and sections.</p>
            </div>
          </div>

          <input
            type="checkbox"
            checked={compactView}
            onChange={(e) => setCompactView(e.target.checked)}
          />
        </div>

        <h2 className="settings-section-title">Notifications</h2>

        <div className="setting-row">
          <div className="setting-info">
            <Bell size={22} />
            <div>
              <h3>Notice Notifications</h3>
              <p>Enable or disable notice notifications.</p>
            </div>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
        </div>

        <button className="primary-button" onClick={saveSettings}>
          Apply Settings
        </button>

        {message && <p className="settings-message">{message}</p>}
      </section>
    </section>
  );
}

export default Settings;
