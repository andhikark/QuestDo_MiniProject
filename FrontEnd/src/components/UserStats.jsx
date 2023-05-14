import React, { useState, useEffect } from "react";
import "../styles/UserStats.css";

function UserStats() {
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [maxXp, setMaxXp] = useState(100);
  const [health, setHealth] = useState(100);
  const [maxHealth, setMaxHealth] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      // decrease health by 5 every day if there is no task done
      setHealth((prevHealth) => {
        if (xp === 0) {
          const newHealth = prevHealth - 5;
          if (newHealth <= 0) {
            setLevel((prevLevel) => Math.max(prevLevel - 1, 1));
            setXp(0);
            setHealth(100);
            setMaxXp(500);
            setMaxHealth(100);
            return 100;
          }
          return newHealth;
        }
        return prevHealth;
      });
    }, 86400000); // 24 hours in milliseconds

    return () => clearInterval(timer);
  }, [xp]);

  useEffect(() => {
    if (xp >= maxXp) {
      setLevel((prevLevel) => prevLevel + 1);
      setXp(0);
      setMaxXp((prevMaxXp) => prevMaxXp + 100);
      setMaxHealth((prevMaxHealth) => prevMaxHealth + 0);
    }
  }, [xp, maxXp]);

  const addXp = (amount) => {
    setXp((prevXp) => prevXp + amount);
  };

  return (
    <div className="User-Container">
      <div className="stats">
        <img
          src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <div className="column">
          <div className="stat">
            <span className="Info">
              Health: {health}/{maxHealth}
            </span>
            <div className="bar">
              <div
                className="health-bar"
                style={{ width: `${(health / maxHealth) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="stat">
            <span className="Info">XP: {xp}/{maxXp}</span>
            <div className="bar">
              <div
                className="xp-bar"
                style={{ width: `${(xp / maxXp) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="stat">
            <div className="level-bar">
              Level: <span className="value">{level}</span>
            </div>
            <button className="xp-button" onClick={() => addXp(10)}>Complete Task (+10 XP)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStats;
