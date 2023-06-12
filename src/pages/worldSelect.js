import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import WorldCard from "../components/WorldCard";

export default function WorldSelect(props){
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
        // if(props.userId < 0){
        //     navigate(`/`)
        // }else{
        API.getWorldsByType(props.worldType)
            .then(data=>{
                setWorlds(data);
            }).catch(err=>{
            console.log(err);
            })
        // }
    }, []);

    return(
    <>
        {worlds.map(world=><WorldCard key={world.id} id={world.id} name={world.name} description={world.description} selectWorld={selectWorld}/>)}
    </>
    )
}