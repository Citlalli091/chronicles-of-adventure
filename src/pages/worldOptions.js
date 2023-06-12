    import React from 'react';
    import { Link } from 'react-router-dom';
    import './worldOptions.css';

    export default function WorldOptions(props){

        return(
        <>
            <h1>{props.world.name}</h1>
            <p>{props.world.description}</p>
            <div>
                <Link to="/adventures">Adventures</Link>
                <p>Select an adventure to go on.</p>
                {props.world.User.id === props.userId ? <Link to="/createadventure">New</Link> :null}
            </div>
            <div>
                <Link to="/lore">Lore</Link>
                <p>View details about different aspects of the world.</p>
                {props.world.User.id === props.userId ? <Link to="/createlore">New</Link> :null}
            </div>
            <div>
                <Link to="/locations">Locations</Link>
                <p>Information on different locations.</p>
                {props.world.User.id === props.userId ? <Link to="/createlocation">New</Link> :null}
            </div>
            <div>
                <Link to="/characters">Characters</Link>
                <p>Information on different characters.</p>
                {props.world.User.id === props.userId ? <Link to="/createsidecharacter">New</Link> :null}
            </div>
        </>
        )
    }