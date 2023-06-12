import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
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
      {isOpen && (
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            {props.userId > 0 ? <Link to="/worldtype">Genres</Link>:null}
          </li>
          <li className="nav-item">
            {props.userId > 0 ? <Link to="/userworlds">My Worlds</Link>:null}
          </li>
          <li className="nav-item">
            {props.userId > 0 ? <Link to="/" onClick={props.logout}>Logout</Link>:null}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;