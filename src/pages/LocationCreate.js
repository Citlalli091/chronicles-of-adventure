import React, { useState } from "react";
import API from "../utils/api";

export default function LocationCreate() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const handleLocationCreate = (e) => {
        e.preventDefault();
            const newLocation = {
                name:name,
                description:desc,
                //TODO: Use selected world for this value
                // WorldId:"4"
            }
        API.createLocation(newLocation)
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
            <h2>Location Creation</h2>
            <form onSubmit={handleLocationCreate}>
                <input
                    type="text"
                    name="name"
                    placeholder="Location Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder="Location Description"
                    value={desc}
                    onChange={(e)=> setDesc(e.target.value)}
                />
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}