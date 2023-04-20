import React from "react";
import "../styles/TaskPage.css";

function TaskPage() {
  const health = 100;
  const maxHealth = 100;
  const healthPercentage = (health / maxHealth) * 100;

  const xp = 250;
  const xpNeeded = 500;
  const xpPercentage = (xp / xpNeeded) * 100;

  return (
    <div className="Container">
        <div className="User-Container">
          <div className="stats">
            <img src="https://via.placeholder.com/100x100" alt="Profile" className="profile-pic" />
            <div className="column">
              <div className="stat">
                <div className="bar">
                  <div className="health-bar" style={{ width: `${healthPercentage}%` }}>
                    <span>Health: {health}/{maxHealth}</span>
                  </div>
                </div>
              </div>
              <div className="stat">
                <div className="bar">
                  <div className="xp-bar" style={{ width: `${xpPercentage}%` }}>
                    <span>XP: {xp}/{xpNeeded}</span>
                  </div>
                </div>
              </div>
              <div className="stat">Level: <span className="value">5</span></div>
            </div>
          </div>
        </div>

        <div className="Task-Container">
            <h1>Task Page</h1>
        </div>

    </div>
    
  );
}

export default TaskPage;