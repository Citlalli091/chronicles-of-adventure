import React, { useState } from "react";
import API from "../utils/api";

export default function WorldCreate() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");

    const handleWorldCreate = (e) => {
        e.preventDefault();
            const newWorld = {
                name:name,
                type:type,
                description:desc,
                //TODO: Use the logged in user for this value
                // UserId:"1"
            }
        API.createWorld(newWorld)
          .then((data) => {
            //TODO: Should redirect at this point
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
    };
    
    return (
        <div>
            <h2>World Creation</h2>
            <form onSubmit={handleWorldCreate}>
                <input
                    type="text"
                    name="name"
                    placeholder="World Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder="World Description"
                    value={desc}
                    onChange={(e)=> setDesc(e.target.value)}
                />
                <br />
                <input
                    type="radio"
                    name="type"
                    value="fantasy"
                    id="fantasyRad"
                    onChange={(e)=> setType(e.target.value)}
                />
                <label for="fantasyRad">Fantasy</label>
                <input
                    type="radio"
                    name="type"
                    value="scifi"
                    id="scifiRad"
                    onChange={(e)=> setType(e.target.value)}
                />
                <label for="scifiRad">Sci Fi</label>
                <input
                    type="radio"
                    name="type"
                    value="other"
                    id="otherRad"
                    onChange={(e)=> setType(e.target.value)}
                />
                <label for="otherRad">Other</label>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}