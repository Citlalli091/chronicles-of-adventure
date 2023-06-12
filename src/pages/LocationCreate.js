import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import "./LocationCreate.css";

export default function LocationCreate(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleLocationCreate = (e) => {
    e.preventDefault();
    const newLocation = {
      name: name,
      description: desc,
      WorldId: props.world.id,
    };
    API.createLocation(newLocation)
      .then(() => {
        selectWorld(props.world.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectWorld = (worldId) => {
    API.getOneWorld(worldId)
      .then((data) => {
        props.setWorld(data);
        navigate("/locations");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h2>Location Creation</h2>
      <form onSubmit={handleLocationCreate}>
        <input
          type="text"
          name="name"
          placeholder="Location Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Location Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}