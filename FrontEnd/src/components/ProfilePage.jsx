import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/ProfilePage.css";
import UserStats from "./UserStats";
import NavBar from "./Navbar";
import Cookies from 'js-cookie';

function ProfilePage() {
  const [userData, setUserData] = useState(null);

    useEffect(() => {
      axios.get('http://127.0.0.1:8080/profile', {  
        headers: {
          Authorization: `Bearer ${Cookies.get('user')}`, 
        },
        withCredentials: true, 
      }) 
        .then(response => {
          setUserData(response.data); 
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
          console.log(error.response);
        });
    }, []);
    
    const joinedDate = userData?.joined_at;
    const formattedDate = joinedDate ? new Date(joinedDate).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
   }) : '';

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
            <span>Joined on: {formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
