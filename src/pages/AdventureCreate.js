import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

export default function AdventureCreate(props) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [open, setOpen] = useState("");

    const handleAdventureCreate = (e) => {
        e.preventDefault();
        const newAdventure = {
            name:name,
            description:desc,
            opening:open,
            WorldId:props.world.id
        }
        API.createAdventure(newAdventure)
        .then(() => {
            selectWorld(props.world.id);
            }).catch((err) => {
                console.log(err);
            });
    };

    const selectWorld = (worldId) =>{
        API.getOneWorld(worldId)
        .then(data=>{
            props.setWorld(data);
            navigate('/stepcreation')
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>
            <h2>Adventure Creation</h2>
            <form onSubmit={handleAdventureCreate}>
                <input
                    type="text"
                    name="name"
                    placeholder="Adventure Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder="Adventure Description"
                    value={desc}
                    onChange={(e)=> setDesc(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    name="opening"
                    placeholder="Opening Page"
                    value={open}
                    onChange={(e)=> setOpen(e.target.value)}
                />
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}