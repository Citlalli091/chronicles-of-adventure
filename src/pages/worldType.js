import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WorldType(props){
    const navigate = useNavigate();

    const handleTypeSelect = (e) => {
        if(e.target.name==="fantasy"){
            props.setWorldType("fantasy")
        }else if(e.target.name==="scifi"){
            props.setWorldType("scifi")
        }else{
            props.setWorldType("other")
        }
        navigate("/worldselect")
    }

    return(
    <>
        <div>
            <button
            name="fantasy"
            onClick={handleTypeSelect}>
            Fantasy</button>
            <p>Worlds from past times with mystical elements.</p>
        </div>
        <div>
            <button
            name="scifi"
            onClick={handleTypeSelect}>
            SciFi</button>
            <p>Worlds from the future with unique technology.</p>
        </div>
        <div>
            <button
            name="other"
            onClick={handleTypeSelect}>
            Other</button>
            <p>Worlds that don't fall in the other 2 categories.</p>
        </div>
    </>  
    )
}