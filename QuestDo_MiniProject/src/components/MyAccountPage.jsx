import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/MyAccountPage.css'

function MyAccountPage () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate form inputs
  let errors = {};
  if (!username) {
    errors.username = "Username is required";
  }
  if (!email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Invalid email format";
  }
  setFormErrors(errors);

  // Submit form if no errors
  if (Object.keys(errors).length === 0) {
    // TODO: Submit form
    console.log("Form submitted!");
  }
};


  return(
    <div className="page-container">
       <Link to="/settings" className="back-button"><FaArrowLeft size={25} color="#FFF" /></Link>
      <div className="top-container">
        <div className="profile-picture">
          <img src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg" alt="Profile" width="200" height="200" style={{ borderRadius: "5px" }} />
        </div>
        <div className="change-picture-container">
          <button className="change-picture-button">
            <span className="change-picture-text">Change Picture</span>
          </button>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Change Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
            {formErrors.username && <span className="error">{formErrors.username}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Change Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>

          <button type="submit" className="save-button">Save</button>
        </form>
      </div>
    </div>
  );
}

export default MyAccountPage;
