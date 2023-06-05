import React, { useState, useEffect } from 'react';
import WorldCard from "./WorldCard";
import API from "./utils/api";

function worldSelect(){
    const [worlds, setWorlds] = useState([]);

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
        {worlds.map(world=><WorldCard key={world.id} id={world.id} name={world.name} description={world.description}/>)}
    </>
    )
}

export default worldSelect;