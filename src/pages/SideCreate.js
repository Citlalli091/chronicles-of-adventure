import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

export default function SideCreate(props) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const handleSideCreate = (e) => {
        e.preventDefault();
            const newSide = {
                name:name,
                description:desc,
                WorldId:props.world.id
            }
        API.createSideCharacter(newSide)
        .then(() => {
            navigate("/userworlds");
            }).catch((err) => {
                console.log(err);
            });
    };
    
    return (
        <div>
            <h2>Side-Character Creation</h2>
            <form onSubmit={handleSideCreate}>
                <input
                    type="text"
                    name="name"
                    placeholder="Character Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder="Character Description"
                    value={desc}
                    onChange={(e)=> setDesc(e.target.value)}
                />
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}