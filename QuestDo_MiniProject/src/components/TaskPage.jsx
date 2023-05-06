import React from "react";
import "../styles/TaskPage.css";
function TaskPage() {
  const health = 100;
  const maxHealth = 100;
  const healthPercentage = (health / maxHealth) * 100;

  const xp = 250;
  const xpNeeded = 500;
  const xpPercentage = (xp / xpNeeded) * 100;

  const level = 1;

  return (  
  <div className="Home">
    <div className="Container">
        <div className="User-Container">
          <div className="stats">
            <img src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg" alt="Profile" className="profile-pic" />
            <div className="column">
              <div className="stat">
              <span className="Info">Health: {health}/{maxHealth}</span>
                <div className="bar">
                  <div className="health-bar" style={{ width: `${healthPercentage}%` }}>
                  </div>
                </div>
              </div>
              <div className="stat">
              <span className="Info">XP: {xp}/{xpNeeded}</span>
                <div className="bar">
                  <div className="xp-bar" style={{ width: `${xpPercentage}%` }}>
                    
                  </div>
                </div>
              </div>
                <div className="stat">
                  <div className="level-bar">
                    Level: <span className="value">{level}</span>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="Task-Container">
            <h1>Task Page</h1>
        </div>

    </div>
  </div>
  );
}

export default TaskPage;