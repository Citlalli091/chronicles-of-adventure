import React, { useState } from "react";

export default function AdventureCard(props) {

    return (
        <div>
            <button
                id={props.id}
                onClick={()=>props.advSelect(props.id)}
            >{props.name}</button>
            <p>
                {props.description}
            </p>
        </div>
    )
}