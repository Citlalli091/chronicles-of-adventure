import React, { useState, useEffect } from 'react';
import WorldCard from "../components/WorldCard";
import API from "../utils/api"
import WorldOptions from './worldOptions';

function WorldSelect(){
    const [worlds, setWorlds] = useState([]);
    const [selectedWorld, setSelectedWorld] = useState();

    const selectWorld = (worldId) =>{
        setSelectedWorld(worldId);
        //TODO: Redirect properly
        return <WorldOptions selectedId={worldId}/>
    }

    useEffect(() => {
    //TODO: "fantasy" to be changed to a prop for selection
        API.getWorldsByType("fantasy")
            .then(data=>{
                setWorlds(data);
            }).catch(err=>{
            console.log(err);
            })
    }, []);

    return(
    <>
        {worlds.map(world=><WorldCard key={world.id} id={world.id} name={world.name} description={world.description} selectWorld={selectWorld}/>)}
    </>
    )
}

export default WorldSelect;