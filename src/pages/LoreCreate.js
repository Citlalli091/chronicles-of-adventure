import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import "./Create.css";

export default function LoreCreate(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleLoreCreate = (e) => {
    e.preventDefault();
    const newLore = {
      name: name,
      description: desc,
      WorldId: props.world.id,
    };
    API.createLore(newLore)
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
        navigate("/lore");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h2>Lore Creation</h2>
      <form onSubmit={handleLoreCreate}>
        <input
          type="text"
          name="name"
          placeholder="Lore Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Lore Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}