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
        <div className="ProfileDetailsBox">
          <div className="ProfileDetails">
            <span>Email: capybara@example.com</span>
            <span>Tasks Completed: 10</span>
            <span>Joined on: January 1, 2023</span>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default ProfilePage;
