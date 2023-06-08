import React from 'react';
import { Link } from "react-router-dom";

export default function Landing(props){

    return(
    <>
        <h1>Chronicles of Adventure</h1>
        <p>Come explore worlds full of fantastical imaginings.  Read all about created lore and characters, then dive into an adventure through the world!  Build your own world and everything that includes and then construct an adventure yourself!</p>
        {props.userId>0?<Link to="/worldtype">Explore Worlds</Link> :<Link to="/login">login</Link>}
        {props.userId>0?null :<Link to="/signup">signup</Link>}
    </>
    )
}