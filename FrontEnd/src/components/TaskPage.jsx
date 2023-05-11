import React from "react";
import "../styles/TaskPage.css";
import UserStats from "./UserStats";
import NavBar from "./Navbar";
import { TodoWrapper } from "./TodoWrapper";
function TaskPage() {
  return (  
  <div className="Home">
    <NavBar/>
    <div className="Container">
        <UserStats />
        <TodoWrapper />
    </div>
  </div>
  );
}

export default TaskPage;