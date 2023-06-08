import React from 'react';
import { Link } from 'react-router-dom';

export default function WorldOptions(props){

    return(
    <>
        <h1>{props.world.name}</h1>
        <p>{props.world.description}</p>
        <div>
            {/* <Link to="/adventures">Adventures</Link> */}
            <h5>Adventures</h5>
            <p>Select an adventure to go on.</p>
        </div>
        <div>
            <Link to="/lore">Lore</Link>
            <p>View details about different aspects of the world.</p>
        </div>
        <div>
            <Link to="/locations">Locations</Link>
            <p>Information on different locations.</p>
        </div>
        <div>
            <Link to="/characters">Characters</Link>
            <p>Information on different characters.</p>
        </div>
    </>
    )
}