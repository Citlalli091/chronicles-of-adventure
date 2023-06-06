import React from 'react';
import './ContentContainer.css';

const ContentContainer = ({ worlds, handleMenuClick }) => {
  return (
    <div className="content-container">
      <h1>Welcome to Chronicles of Adventure</h1>
      <p>Here, you can create and explore unique worlds filled with characters and lore.</p>
      <div className="menu-container">
        <button className="menu-button" onClick={() => handleMenuClick('create')}>
          Create a World
        </button>
        <button className="menu-button" onClick={() => handleMenuClick('view')}>
          View Worlds
        </button>
        <button className="menu-button" onClick={() => handleMenuClick('edit')}>
          Edit a World
        </button>
      </div>
      {worlds.length > 0 && (
        <div>
          <h2>User-Created Worlds</h2>
          <ul>
            {worlds.map((world) => (
              <li key={world.id}>
                <h3>{world.name}</h3>
                <p>{world.description}</p>
                <p>{world.type}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContentContainer;