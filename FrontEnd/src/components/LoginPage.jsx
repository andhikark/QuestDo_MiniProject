import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import '../styles/LoginPage.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleTabClick = async (event) => {
    event.preventDefault(); 
    try {
      const response = await getData();
      console.log(response.data.success);
      if (response.data.success) {
          navigate(`/profile`);
      } else {
        window.alert("Password is wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const response = await Axios.post("http://localhost:5173/", {
        username: username,
        password: password,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error.message);
      console.error(error.response.status);
      throw error;
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">QuestDo</div>
      <div className="login-inputs">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="login-button" onClick={handleTabClick}>Log in </button>
      </div>
      <div className="login-message">
        <span> Or </span>
      </div>
      <div className="login-buttons">
        <Link to="/signin" className="signin-button">Sign in</Link>
      </div>
    </div>
  );
}

export default Login;
