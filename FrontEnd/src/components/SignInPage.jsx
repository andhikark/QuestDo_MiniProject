  import React from "react";
  import { useState } from "react";
  import { FaArrowLeft } from "react-icons/fa";
  import '../styles/SignInPage.css';
  import { Link } from 'react-router-dom';

  function SignInPage (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();

      // Email validation using regex
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        setEmailError(true);
        return;
      }
      setEmailError(false);

      // Password validation using regex
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      if (!passwordRegex.test(password)) {
        setPasswordError(true);
        return;
      }
      setPasswordError(false);

      // Confirm password validation
      if (password !== confirmPassword) {
        setConfirmPasswordError(true);
        return;
      }
      setConfirmPasswordError(false);

      // Username validation
    if (username.length < 4) {
      setUsernameError(true);
      return;
    }
    setUsernameError(false);

      // Submit the form
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
    }

    return(
      <div className="page-container">
        <Link to="/" className="back-button"><FaArrowLeft size={25} color="#FFF" /></Link>
        <div className="sign-title">QuestDo</div>
        <form className="sign-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            {usernameError && <span className="error-message">Please enter a valid username</span>}
          </div>
          <div className="input-container">
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {emailError && <span className="error-message">Please enter a valid email address</span>}
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {passwordError && <span className="error-message">Please enter a valid password (at least 8 characters, including one uppercase letter, one lowercase letter, and one number)</span>}
          </div>
          <div className="input-container">
            <label>Confirm Password:</label>
            <input type="password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            {confirmPasswordError && <span className="error-message">Passwords do not match</span>}
          </div>
          <button type="submit" className="sign-button ">Sign Up</button>
        </form>
      </div>
    );
  }

  export default SignInPage;
