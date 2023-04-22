import React from 'react';
import '../styles/LoginPage.css'; // import the CSS file for this component

function Login() {
  return (
    <div className="login-container">
      <div className="login-title">QuestDo</div>
      <div className="login-buttons">
        <button className="login-button">Login</button>
        <div className="or-text">or</div>
        <button className="signin-button">Sign in</button>
      </div>
      <div className="login-message">
        Let’s make your task feel like a game!
      </div>
    </div>
  );
}

export default Login;
