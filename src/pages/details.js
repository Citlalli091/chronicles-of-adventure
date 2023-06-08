import React from 'react';
import { Link } from 'react-router-dom';
import LoreCard from "../components/LoreCard";
import LocationCard from '../components/LocationCard';

export default function Details(props){

    return(
    <>
        <Link to="/worldoptions">{props.world.name}</Link>
        <h3>{props.usage}</h3>
        {props.usage === "Lore" ? props.world.Lores.map(lore=><LoreCard key={lore.id} id={lore.id} name={lore.name} description={lore.description}/>):null}
        {props.usage === "Locations" ? props.world.Locations.map(loc=><LocationCard key={loc.id} id={loc.id} name={loc.name} description={loc.description}/>):null}
        {/* {props.usage === "Characters" ? props.world.SideCharacters.map(side=><CharacterCard key={side.id} id={side.id} name={side.name} description={side.description}/>):null}
        {props.usage === "Characters" ? props.world.Characters.map(char=><CharacterCard key={char.id} id={char.id} name={char.name} description={char.description} characteristics={char.characteristics} age={char.age}/>):null} */}
    </>
    )
}