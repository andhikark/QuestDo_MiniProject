import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar" style={{backgroundColor: '#5D2E8C'}}>
        <span className="logo-text" style={{fontFamily: 'Sedan SC'}}>QuestDo</span>
      <div className="links" >
        <a href="#profile" className="link">Profile</a>
        <a href="#task" className="link">Task</a>
        <a href="#setting" className="link">Setting</a>
        <a href="#about" className="link">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
