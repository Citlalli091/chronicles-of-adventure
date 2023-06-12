import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './worldType.css';

export default function WorldType(props) {
  const navigate = useNavigate();

  const handleTypeSelect = (e) => {
    if (e.target.name === "fantasy") {
      props.setWorldType("fantasy")
    } else if (e.target.name === "scifi") {
      props.setWorldType("scifi")
    } else {
      props.setWorldType("other")
    }
    navigate("/worldselect")
  }

  return (
    <div className="container">
        <h1>Choose a Genre</h1>
      <div>
        <button className="button" name="fantasy" onClick={handleTypeSelect}>
          Fantasy
        </button>
        <p className="description">Worlds from past times with mystical elements.</p>
      </div>
      <div>
        <button className="button" name="scifi" onClick={handleTypeSelect}>
          SciFi
        </button>
        <p className="description">Worlds from the future with unique technology.</p>
      </div>
      <div>
        <button className="button" name="other" onClick={handleTypeSelect}>
          Other
        </button>
        <p className="description">Worlds that don't fall in the other 2 categories.</p>
      </div>
    </div>
  )
}