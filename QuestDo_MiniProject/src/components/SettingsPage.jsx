import React from 'react';
import '../styles/SettingsPage.css';

function Settings() {
  return (
    <div>
      <div className="settings-container">
        <div className="profile-picture">
          <img src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg" alt="Profile" width="200" height="200" style={{ borderRadius: "5px" }} />
        </div>
        <div className="account-info">
          <div className="email"><p>andhikarestu873@gmail.com</p></div>
        </div>
      </div>


      <div className="button-container">
        <button className="my-account-button">
            <span className="button-text">My Account</span>
        </button>
      </div>

      <div className='remainder-container'>
        
      </div>


    </div>
   

    
  );
}

export default Settings;
