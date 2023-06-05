import React from "react";
import API from "../utils/api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WorldCard(props) {

    const selectWorld = (worldId)=>{
        API.getOneWorld(worldId)
            .then((data)=>{
                data.fetchData()
            })
    }

    return (
        <div>
            <button
            onClick={()=>selectWorld(props.id)}
            id={props.id}
            class="worldSelectBtn">
                {props.name}
            </button>
            <p>
                {props.description}
            </p>
        </div>
    )
}

//--//  Example for using Component

// import React, { useState, useEffect } from 'react';
// import WorldCard from "./WorldCard";
// import API from "./utils/api";
//
// const [worlds, setWorlds] = useState([]);
//
// useEffect(() => {
//   API.getWorldsByType("fantasy").then(data=>{
//     setWorlds(data);
//   }).catch(err=>{
//     console.log(err);
//   })
// }, []);
//
// return(
//  <>
//      {worlds.map(world=><WorldCard key={world.id} id={world.id} name={world.name} description={world.description}/>)}
//  </>
// )