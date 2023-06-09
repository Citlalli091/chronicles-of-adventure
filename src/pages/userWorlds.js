import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import API from "../utils/api"
import WorldCard from "../components/WorldCard";

export default function UserWorlds(props){
    const navigate = useNavigate();
    const [worlds, setWorlds] = useState([]);

    const selectWorld = (worldId) =>{
        API.getOneWorld(worldId)
        .then(data=>{
            props.setWorld(data);
            navigate('/worldOptions')
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(() => {
        API.getWorldsByUser(props.userId)
            .then(data=>{
                setWorlds(data);
            }).catch(err=>{
            console.log(err);
            })
        // }
    }, []);

    return(
    <>
        <h1>{props.username} Worlds</h1>
        {worlds.map(world=><WorldCard key={world.id} id={world.id} name={world.name} description={world.description} selectWorld={selectWorld}/>)}
        <Link to="/createworld">New World</Link>
    </>
    )
}