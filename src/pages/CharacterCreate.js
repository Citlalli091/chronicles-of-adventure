import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

export default function CharacterCreate(props) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [char, setChar] = useState("");
    const [age, setAge] = useState("");

    const handleCharacterCreate = (e) => {
        e.preventDefault();
        const newCharacter = {
            name:name,
            description:desc,
            characteristics:char,
            age:age,
            WorldId:props.world.id
        }
        API.createCharacter(newCharacter)
        .then((data) => {
            console.log(data);
            API.getOneWorld(props.world.id)
                }).then(data=>{
                props.setWorld(data);
                    }).then(()=>{
                        navigate("/worldcharacters");
                        }).catch((err) => {
                            console.log(err);
                        });
    };

    return (
        <div>
            <h2>Character Creation</h2>
            <form onSubmit={handleCharacterCreate}>
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
                <input
                    type="text"
                    name="characteristics"
                    placeholder="Character Characteristics"
                    value={char}
                    onChange={(e)=> setChar(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    name="age"
                    placeholder="Character Age"
                    value={age}
                    onChange={(e)=> setAge(e.target.value)}
                />
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}