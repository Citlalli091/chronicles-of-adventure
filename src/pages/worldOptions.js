import React from 'react';
import { Link } from 'react-router-dom';
import './worldOptions.css';

export default function WorldOptions(props) {
  return (
    <div className="container">
      <h1>{props.world.name}</h1>
      <p>{props.world.description}</p>
      <div className="link-container">
        <Link to="/adventures" className="button">
          Adventures
        </Link>
        <p>Select an adventure to go on.</p>
        {props.world.User.id === props.userId ? (
          <Link to="/createadventure" className="button new-button">
            New
          </Link>
        ) : null}
      </div>
      <div className="link-container">
        <Link to="/lore" className="button">
          Lore
        </Link>
        <p>View details about different aspects of the world.</p>
        {props.world.User.id === props.userId ? (
          <Link to="/createlore" className="button new-button">
            New
          </Link>
        ) : null}
      </div>
      <div className="link-container">
        <Link to="/locations" className="button">
          Locations
        </Link>
        <p>Information on different locations.</p>
        {props.world.User.id === props.userId ? (
          <Link to="/createlocation" className="button new-button">
            New
          </Link>
        ) : null}
      </div>
      <div className="link-container">
        <Link to="/characters" className="button">
          Characters
        </Link>
        <p>Information on different characters.</p>
        {props.world.User.id === props.userId ? (
          <Link to="/createsidecharacter" className="button new-button">
            New
          </Link>
        ) : null}
      </div>
    </div>
  );
}