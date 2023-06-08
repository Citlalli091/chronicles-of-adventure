import React from 'react';
import { Link } from "react-router-dom";
import './Landing.css';

export default function Landing(props) {
  return (
    <>
    <div className="content-container">
      <h1>Chronicles of Adventure</h1>
      <p>Come explore worlds full of fantastical imaginings. Read all about created lore and characters, then dive into an adventure through the world! Build your own world and everything that includes and then construct an adventure yourself!</p>
      {props.userId > 0 ? (
        <Link to="/worldtype" className="explore-button">Explore Worlds</Link>
      ) : (
        <Link to="/login" className="auth-button-login">Login</Link>
      )}
      {props.userId > 0 ? null : (
        <Link to="/signup" className="auth-button-signup">Signup</Link>
      )}
      </div>
    </>
    
    
  );
}