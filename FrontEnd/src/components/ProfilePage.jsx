import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/ProfilePage.css";
import UserStats from "./UserStats";
import NavBar from "./Navbar";

function ProfilePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/user', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }) 
      .then(response => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch(error => {
        console.error(error);
        console.log(error.response);
      });
  }, []);
  
  return (
    <div className="Home">
      <NavBar/>
      <div className="Container">
        <UserStats />
        <div className="Username">
          <span>{userData?.username}</span>
        </div>
        <div className="ProfileDetailsBox">
          <div className="ProfileDetails">
            <span>Email: {userData?.email}</span>
            <span>Tasks Completed: {userData?.task_completed}</span>
            <span>Joined on: {userData?.joined_at}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
