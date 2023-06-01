import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1em',
    backgroundColor: '#f5f5f5',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'blue',
  };

  return (
    <nav style={navStyle}>
      <Link to="/signup" style={linkStyle}>Sign Up</Link>
      <Link to="/login" style={linkStyle}>Log In</Link>
    </nav>
  );
}

export default NavBar;