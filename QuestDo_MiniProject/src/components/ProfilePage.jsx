import React from "react";
import "../styles/ProfilePage.css";
import UserStats from "./UserStats";
import NavBar from "./Navbar";
function ProfilePage() {
  return (  
  <div className="Home">
    <NavBar/>
    <div className="Container">
        <UserStats />
        <div className="Username">
            <span>CapyBara</span>
        </div>
        <div className="Task-Container">
            <h1>Task Page</h1>
        </div>

    </div>
  </div>
  );
}

export default ProfilePage;