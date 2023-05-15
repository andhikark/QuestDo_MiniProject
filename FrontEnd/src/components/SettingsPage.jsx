import React, { useState, useEffect } from 'react';
import '../styles/SettingsPage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from './Navbar';

function Settings() {
  const navigate = useNavigate();
  const [isRemainderEnabled, setIsRemainderEnabled] = useState(
    localStorage.getItem('isRemainderEnabled') === 'true'
  );
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(
    localStorage.getItem('isNotificationEnabled') === 'true'
  );

  const toggleRemainder = () => {
    const newValue = !isRemainderEnabled;
    setIsRemainderEnabled(newValue);
    localStorage.setItem('isRemainderEnabled', newValue);
  };

  const toggleNotification = () => {
    const newValue = !isNotificationEnabled;
    setIsNotificationEnabled(newValue);
    localStorage.setItem('isNotificationEnabled', newValue);
  };

  const logout = () => {
    navigate('/');
  };

  return (
    <div>
      <NavBar />
      <div className="settings-container">
        <div className="profile-picture">
          <img
            src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
            alt="Profile"
            width="200"
            height="200"
            style={{ borderRadius: '5px' }}
          />
        </div>
        <div className="account-info"></div>
      </div>

      <div className="button-container">
        <Link to="/myaccount" className="my-account-button">
          <span className="button-text">My Account</span>
        </Link>
      </div>

      <div className="remainder-container">
        <div className="remainder-wrapper">
          <p className="remainder-text">Reminders </p>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={isRemainderEnabled}
              onChange={toggleRemainder}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="remainder-container">
        <div className="notification-wrapper">
          <p className="remainder-text">Notifications </p>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={isNotificationEnabled}
              onChange={toggleNotification}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="log-out-container">
        <button className="log-out-button" onClick={logout}>
          <span className="log-out-text">Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default Settings;
