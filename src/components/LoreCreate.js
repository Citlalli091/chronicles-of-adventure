import React, { useState } from "react";
import API from "../utils/api";

export default function LoreCreate() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const handleLoreCreate = (e) => {
        e.preventDefault();
            const newLore = {
                name:name,
                description:desc,
                //TODO: Use selected world for this value
                // WorldId:"4"
            }
        API.createLore(newLore)
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
            <h2>Lore Creation</h2>
            <form onSubmit={handleLoreCreate}>
                <input
                    type="text"
                    name="name"
                    placeholder="Lore Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder="Lore Description"
                    value={desc}
                    onChange={(e)=> setDesc(e.target.value)}
                />
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}