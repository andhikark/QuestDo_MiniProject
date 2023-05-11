import React from 'react';
import { useState} from 'react';
import '../styles/SettingsPage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from './Navbar';
function Settings() {
  const navigate = useNavigate();
  const [isRemainderEnabled, setIsRemainderEnabled] = useState(false);
  const [isRemainderEnabled1, setIsRemainderEnabled1] = useState(false);

  const toggleRemainder = () => {
    setIsRemainderEnabled(!isRemainderEnabled);
  };

  const toggleRemainder1 = () => {
    setIsRemainderEnabled1(!isRemainderEnabled1);
  };

  const logout = () => {
    navigate('/');
  }

  return (
    <div>
      <NavBar />
      <div className="settings-container">
        <div className="profile-picture">
          <img src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg" alt="Profile" width="200" height="200" style={{ borderRadius: "5px" }} />
        </div>
        <div className="account-info">
          <div className="email"><p>andhikarestu873@gmail.com</p></div>
        </div>
      </div>


      <div className="button-container">
        <Link to="/myaccount" className="my-account-button">
          <span className="button-text">My Account</span>
        </Link>
      </div>

      <div className="remainder-container">
        <div className="remainder-wrapper">
          <p className="remainder-text">Remainders  </p>
          <label className="toggle-switch">
            <input type="checkbox" checked={isRemainderEnabled} onChange={toggleRemainder} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="remainder-container">
        <div className="notification-wrapper">
          <p className="remainder-text">Notifications </p>
          <label className="toggle-switch">
            <input type="checkbox" checked={isRemainderEnabled1} onChange={toggleRemainder1} />
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
