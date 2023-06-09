import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

export default function StepCreation(props){

    const navigate = useNavigate();

    const [response1, setResponse1] = useState("");
    const [response2, setResponse2] = useState("");
    const [response3, setResponse3] = useState("");
    const [outcome1, setOutcome1] = useState("");
    const [outcome2, setOutcome2] = useState("");
    const [outcome3, setOutcome3] = useState("");
    const [option, setOption] = useState("");
    const [previous, setPrevious] = useState(0);
    const [current, setCurrent] = useState(0);

    const handleFirstStep = (e) => {
        const newStep1 = {
            response:response1,
            text:outcome1,
            option:1,
            isFirstStep:true,
            AdventureId:props.adventure.id
        }
        const newStep2 = {
            response:response2,
            text:outcome2,
            option:2,
            isFirstStep:true,
            AdventureId:props.adventure.id
        }
        const newStep3 = {
            response:response3,
            text:outcome3,
            option:3,
            isFirstStep:true,
            AdventureId:props.adventure.id
        }
        API.createAdventureStep(newStep1)
        .then(data=>{
            if(option==="1"){
                setPrevious(data.id)
            }
            setResponse1("");
            setOutcome1("");
            setOption("");
            API.createAdventureStep(newStep2)
            .then(data=>{
                if(option==="2"){
                    setPrevious(data.id)
                }
                setResponse2("");
                setOutcome2("");
                API.createAdventureStep(newStep3)
                .then(data=>{
                    if(option==="3"){
                        setPrevious(data.id)
                    }
                setResponse3("");
                setOutcome3("");
                })
            })
        }).catch(err=>{
            console.log(err);
        })
    }

    const handleStepCreate = (e) => {
        e.preventDefault();
        setCurrent(current+1)
        if(previous===0){
            handleFirstStep();
            return;
        }
        const newStep1 = {
            response:response1,
            text:outcome1,
            option:1,
            previous:previous,
            isFirstStep:false,
            AdventureId:props.adventure.id
        }
        const newStep2 = {
            response:response2,
            text:outcome2,
            option:2,
            previous:previous,
            isFirstStep:false,
            AdventureId:props.adventure.id
        }
        const newStep3 = {
            response:response3,
            text:outcome3,
            option:3,
            previous:previous,
            isFirstStep:false,
            AdventureId:props.adventure.id
        }
        console.log(option)
        API.createAdventureStep(newStep1)
        .then(data=>{
            if(option==="1"){
                setPrevious(data.id)
            }
            setResponse1("");
            setOutcome1("");
            setOption("");
            API.createAdventureStep(newStep2)
            .then(data=>{
                if(option==="2"){
                    setPrevious(data.id)
                }
                setResponse2("");
                setOutcome2("");
                API.createAdventureStep(newStep3)
                .then(data=>{
                    if(option==="3"){
                        setPrevious(data.id)
                    }
                setResponse3("");
                setOutcome3("");
                if(current>4){
                    navigate("/adventures")
                }
                })
            })
        }).catch(err=>{
            console.log(err);
        })
    }


    return(
    <>
        <h2>{props.adventure.name} Steps</h2>
        <p>Opening</p>
        <p>{props.adventure.opening}</p>
        <form onSubmit={handleStepCreate}>
            <div>
                <label htmlFor="Response 1">Response 1</label>
                <input
                    type="text"
                    name="Response 1"
                    placeholder="response"
                    value={response1}
                    onChange={(e)=> setResponse1(e.target.value)}
                />
                <label htmlFor="Outcome 1">Outcome 1</label>
                <input
                    type="text"
                    name="Outcome 1"
                    placeholder="outcome"
                    value={outcome1}
                    onChange={(e)=> setOutcome1(e.target.value)}
                />
                <label htmlFor="Option 1 Radio">Correct Choice?</label>
                <input
                    type="radio"
                    name="option"
                    value="1"
                    id="Option 1 Radio"
                    onChange={(e)=> setOption(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="Response 2">Response 2</label>
                <input
                    type="text"
                    name="Response 2"
                    placeholder="response"
                    value={response2}
                    onChange={(e)=> setResponse2(e.target.value)}
                />
                <label htmlFor="Outcome 2">Outcome 2</label>
                <input
                    type="text"
                    name="Outcome 2"
                    placeholder="outcome"
                    value={outcome2}
                    onChange={(e)=> setOutcome2(e.target.value)}
                />
                <label htmlFor="Option 2 Radio">Correct Choice?</label>
                <input
                    type="radio"
                    name="option"
                    value="2"
                    id="Option 2 Radio"
                    onChange={(e)=> setOption(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="Response 3">Response 3</label>
                <input
                    type="text"
                    name="Response 3"
                    placeholder="response"
                    value={response3}
                    onChange={(e)=> setResponse3(e.target.value)}
                />
                <label htmlFor="Outcome 3">Outcome 3</label>
                <input
                    type="text"
                    name="Outcome 3"
                    placeholder="outcome"
                    value={outcome3}
                    onChange={(e)=> setOutcome3(e.target.value)}
                />
                <label htmlFor="Option 3 Radio">Correct Choice?</label>
                <input
                    type="radio"
                    name="option"
                    value="3"
                    id="Option 3 Radio"
                    onChange={(e)=> setOption(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
    )
}