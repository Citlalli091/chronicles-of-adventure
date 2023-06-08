import React, { useState, useEffect } from 'react';
import LoreCard from "../components/LoreCard";
import API from "../utils/api";

export default function WorldLore(){
    const [lores, setLores] = useState([]);

    useEffect(() => {
    API.getLoresByWorld("1").then(data=>{
        setLores(data);
    }).catch(err=>{
        console.log(err);
    })
    }, []);

    return(
    <>
        {lores.map(lore=><LoreCard key={lore.id} id={lore.id} name={lore.name} description={lore.description}/>)}
    </>
    )
}