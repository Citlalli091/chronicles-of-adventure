import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import WorldCard from "../components/WorldCard";
import './worldSelect.css';

export default function WorldSelect(props) {
  const navigate = useNavigate();
  const [worlds, setWorlds] = useState([]);

  const selectWorld = (worldId) => {
    API.getOneWorld(worldId)
      .then(data => {
        props.setWorld(data);
        navigate('/worldOptions');
      }).catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    API.getWorldsByType(props.worldType)
      .then(data => {
        setWorlds(data);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      {worlds.map(world =>
        <div className="world-card" key={world.id}>
          <h2>{world.name}</h2>
          <p>{world.description}</p>
          <button onClick={() => selectWorld(world.id)}>Select World</button>
        </div>
      )}
    </div>
  )
}