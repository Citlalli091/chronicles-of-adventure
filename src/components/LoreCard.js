import React from "react";

export default function LoreCard(props) {
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
// import LoreCard from "./LoreCard";
// import API from "./utils/api";
//
// const [lores, setLores] = useState([]);
//
// useEffect(() => {
//   API.getLoresByWorld("1").then(data=>{
//     setLores(data);
//   }).catch(err=>{
//     console.log(err);
//   })
// }, []);
//
// return(
//  <>
//      {lores.map(lore=><LoreCard key={lore.id} id={lore.id} name={lore.name} description={lore.description}/>)}
//  </>
// )