import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdventureCard from '../components/AdventureCard';
import API from '../utils/api';
import './AdventurePage.js';

export default function AdventurePage(props){

    const navigate = useNavigate();

    const advSelect = (advId) => {
        API.getOneAdventure(advId)
        .then((data) => {
            props.setAdventure(data);
            navigate("/adventure")
            }).catch((err) => {
                console.log(err);
            });
    };

    return(
    <>
        <Link to="/worldoptions">{props.world.name}</Link>
        <h3>Adventures</h3>
        {props.world.Adventures.map(adv=><AdventureCard key={adv.id} id={adv.id} name={adv.name} description={adv.description} opening={adv.opening} setAdventure={props.setAdventure} advSelect={advSelect}/>)}
    </>
    )
}