import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import API from "../utils/api";
import './userWorlds.css';

export default function UserWorlds(props) {
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
        API.getWorldsByUser(props.userId)
            .then(data => {
                setWorlds(data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="heading">{props.username} Worlds</h1>
            <div className="worlds-container">
                {worlds.map(world =>
                    <div className="world-card" key={world.id}>
                        <h2 className="world-name">{world.name}</h2>
                        <p className="world-description">{world.description}</p>
                        <button className="select-button" onClick={() => selectWorld(world.id)}>Select World</button>
                    </div>
                )}
            </div>
            <Link to="/createworld" className="new-world-link">New World</Link>
        </div>
    )
}