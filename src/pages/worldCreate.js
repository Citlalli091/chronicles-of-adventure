import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import './worldCreate.css';

export default function WorldCreate(props) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");

    const handleWorldCreate = (e) => {
        e.preventDefault();
        const newWorld = {
            name: name,
            type: type,
            description: desc,
            UserId: props.userId
        }
        API.createWorld(newWorld)
            .then(() => {
                navigate("/userworlds");
            }).catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <h2>World Creation</h2>
            <form onSubmit={handleWorldCreate}>
                <input
                    type="text"
                    name="name"
                    placeholder="World Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder="World Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <br />
                <input
                    type="radio"
                    name="type"
                    value="fantasy"
                    id="fantasyRad"
                    onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="fantasyRad">Fantasy</label>
                <input
                    type="radio"
                    name="type"
                    value="scifi"
                    id="scifiRad"
                    onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="scifiRad">Sci Fi</label>
                <input
                    type="radio"
                    name="type"
                    value="other"
                    id="otherRad"
                    onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="otherRad">Other</label>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}