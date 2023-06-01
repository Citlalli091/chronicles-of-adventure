import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">Worlds</a>
        </li>
        <li className="nav-item">
          <a href="#">More Worlds</a>
        </li>
        <li className="nav-item">
          <a href="#">WORLDSSSSSSS</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;