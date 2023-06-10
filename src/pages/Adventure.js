import React, { useState } from "react";

export default function Adventure(props){


    
    return(
    <>
        <h2>{props.adventure.name}</h2>
        <h6>{props.adventure.description}</h6>
        <p>{props.adventure.opening}</p>
    </>
    )
}