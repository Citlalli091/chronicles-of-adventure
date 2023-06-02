import React from "react";

export default function PalletCard(props) {
    return (
        <div>
            <h3 id={props.id}>
                {props.name}
            </h3>
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