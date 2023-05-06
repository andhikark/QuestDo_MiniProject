import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-title">QuestDo</div>
      <div className="login-buttons">
        <Link to="/profile" className="login-button">Login</Link>
        <div className="or-text">or</div>
        <Link to="/signin" className="signin-button">Sign in</Link>
      </div>
      <div className="login-message">
        Let’s make your task feel like a game!
      </div>
    </div>
  );
}

export default Login;
