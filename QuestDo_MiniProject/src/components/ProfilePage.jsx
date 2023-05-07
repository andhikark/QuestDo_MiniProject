import React from "react";
import "../styles/ProfilePage.css";
import UserStats from "./UserStats";
import NavBar from "./Navbar";
import Achievement from "./Achievement";

const achievements = [
  
  {
    description: "You have completed your first task!",
  },
  {
    description: "You have completed 5 tasks!",
  },
  {
    description: "You have completed 10 tasks!",
  },
  {
    description: "You have completed 25 tasks!",
  },
  {
    description: "You have completed 50 tasks!",
  },
];

function ProfilePage() {
  return (  
    <div className="Home">
      <NavBar/>
      <div className="Container">
        <UserStats />
        <div className="Username">
          <span>CapyBara</span>
        </div>
          {achievements.map((achievement) => (
            <Achievement
              description={achievement.description}
            />
          ))}
      </div>
    </div>
  );
}

export default ProfilePage;
