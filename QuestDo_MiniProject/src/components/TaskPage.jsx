import React from "react";
import "../styles/TaskPage.css";
import UserStats from "./UserStats";
import NavBar from "./Navbar";
function TaskPage() {
  return (  
  <div className="Home">
    <NavBar/>
    <div className="Container">
        <UserStats />
        <div className="Task-Container">
            <h1>Task Page</h1>
        </div>

    </div>
  </div>
  );
}

export default TaskPage;