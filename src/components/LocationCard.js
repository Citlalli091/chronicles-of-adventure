import React from "react";

export default function LocationCard(props) {
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
// import LocationCard from "./LocationCard";
// import API from "./utils/api";
//
// const [locs, setLocs] = useState([]);
//
// useEffect(() => {
//   API.getLocationsByWorld("1").then(data=>{
//     setLocs(data);
//   }).catch(err=>{
//     console.log(err);
//   })
// }, []);
//
// return(
//  <>
//      {locs.map(loc=><LocationCard key={loc.id} id={loc.id} name={loc.name} description={loc.description}/>)}
//  </>
// )