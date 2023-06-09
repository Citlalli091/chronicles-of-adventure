import React from "react";

export default function SideCard(props) {
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
