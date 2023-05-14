import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginPage.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('/', { username, password });
      if (response.data.success) {
        setLoggedIn(true);
        // Redirect to /profile here
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">QuestDo</div>
      <div className="login-inputs">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Link to="/profile" className="login-button">Log in </Link>
      </div>
      <div className="login-message">
        {loggedIn ? 'Welcome back!' : 'Let’s make your task feel like a game!'}
      </div>
      <div className="login-buttons">
        <Link to="/signin" className="signin-button">Sign in</Link>
      </div>
    </div>
  );
}

export default Login;
