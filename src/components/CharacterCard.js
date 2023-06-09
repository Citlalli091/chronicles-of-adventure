import React from "react";

export default function CharacterCard(props) {
    return (
        <div>
            <h3 id={props.id}>
                {props.name}
            </h3>
            {props.age ? <h6>Age</h6>:null}
            {props.age ? <p>{props.age}</p>:null}
            {props.characteristics ? <h6>Characteristics</h6>:null}
            {props.characteristics ? <p>{props.characteristics}</p>:null}
            <h6>Description</h6>
            <p>{props.description}</p>
        </div>
    )
}