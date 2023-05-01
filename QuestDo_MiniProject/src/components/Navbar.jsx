import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar" style={{backgroundColor: '#5D2E8C'}}>
      <span className="logo-text" style={{fontFamily: 'Sedan SC'}}>QuestDo</span>

      <button className="hamburger-menu" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      <div className={`links ${isOpen ? 'open' : ''}`}>
        <a href="#profile" className="link">Profile</a>
        <a href="#task" className="link">Task</a>
        <a href="#setting" className="link">Setting</a>
        <a href="#about" className="link">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
