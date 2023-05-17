import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/MyAccountPage.css'
import Cookies from 'js-cookie';

function MyAccountPage () {
  const [username, setUsername] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validate form inputs
    let errors = {};
    if (!username) {
      errors.username = "Username is required";
    }
    
    setFormErrors(errors);
    const userToken = Cookies.get('user');

    console.log('Token:', userToken);
    console.log('New Username:', username);

    // Submit form if no errors
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.put(
          `http://localhost:8080/myaccount`,
          { newUsername: username },
          { headers: { Authorization: `Bearer ${userToken}` } } 
        );
        console.log(response.data.message);
        // Handle success
      } catch (error) {
        console.error(error);
        // Handle error
      }
    }
  };
  

  return(
    <div className="page-container">
      <Link to="/settings" className="back-button"><FaArrowLeft size={25} color="#FFF" /></Link>
      <div className="top-container">
        <div className="profile-picture">
          <img src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg" alt="Profile" width="200" height="200" style={{ borderRadius: "5px" }} />
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Change Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
            {formErrors.username && <span className="error">{formErrors.username}</span>}
          </div>
          <button type="submit" className="save-button">Save</button>
        </form>
      </div>
    </div>
  );
}

export default MyAccountPage;
