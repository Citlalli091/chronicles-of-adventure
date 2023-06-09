import React, { useState, useEffect } from "react";
import './Adventure.css'

export default function Adventure(props){

    const [current, setCurrent] = useState(({previous:"no"}));
    const [option1, setOption1] = useState(props.adventure.AdventureSteps[0]);
    const [option2, setOption2] = useState(props.adventure.AdventureSteps[1]);
    const [option3, setOption3] = useState(props.adventure.AdventureSteps[2]);
    const [count, setCount] = useState(0)

    const handleSelect1 = () => {
        console.log(current);
        console.log(option1);
        current.id = option1.id;
        current.response = option1.response;
        current.text = option1.text;
        current.isFirstStep = option1.isFirstStep;
        current.option = option1.option;
        current.previous = option1.previous;
        option1.response = "";
        option2.response = "";
        option3.response = "";
        console.log(current);
        setCount(count+1)
        if(count>4){
            return;
        };
        for (let i = 0; i < props.adventure.AdventureSteps.length; i++) {
            console.log(props.adventure.AdventureSteps[i])
            if(props.adventure.AdventureSteps[i].previous === current.id){
                if(option3.previous !== props.adventure.AdventureSteps[i].previous){
                    setOption3(props.adventure.AdventureSteps[i]);
                    option3.id = props.adventure.AdventureSteps[i].id;
                    option3.response = props.adventure.AdventureSteps[i].response;
                    option3.text = props.adventure.AdventureSteps[i].text;
                    option3.isFirstStep = props.adventure.AdventureSteps[i].isFirstStep;
                    option3.option = props.adventure.AdventureSteps[i].option;
                    option3.previous = props.adventure.AdventureSteps[i].previous;
                } else
                if(option2.previous !== props.adventure.AdventureSteps[i].previous){
                    setOption2(props.adventure.AdventureSteps[i]);
                    option2.id = props.adventure.AdventureSteps[i].id;
                    option2.response = props.adventure.AdventureSteps[i].response;
                    option2.text = props.adventure.AdventureSteps[i].text;
                    option2.isFirstStep = props.adventure.AdventureSteps[i].isFirstStep;
                    option2.option = props.adventure.AdventureSteps[i].option;
                    option2.previous = props.adventure.AdventureSteps[i].previous;
                } else
                if(option1.previous !== props.adventure.AdventureSteps[i].previous){
                    setOption1(props.adventure.AdventureSteps[i]);
                    option1.id = props.adventure.AdventureSteps[i].id;
                    option1.response = props.adventure.AdventureSteps[i].response;
                    option1.text = props.adventure.AdventureSteps[i].text;
                    option1.isFirstStep = props.adventure.AdventureSteps[i].isFirstStep;
                    option1.option = props.adventure.AdventureSteps[i].option;
                    option1.previous = props.adventure.AdventureSteps[i].previous;
                    return;
                }
            }
        }
    }

    const handleSelect2 = () => {
        console.log(current);
        console.log(option2);
        current.id = option2.id;
        current.response = option2.response;
        current.text = option2.text;
        current.isFirstStep = option2.isFirstStep;
        current.option = option2.option;
        current.previous = option2.previous;
        option1.response = "";
        option2.response = "";
        option3.response = "";
        console.log(current);
        setCount(count+1)
        if(count>4){
            return;
        };
        for (let i = 0; i < props.adventure.AdventureSteps.length; i++) {
            console.log(props.adventure.AdventureSteps[i])
            if(props.adventure.AdventureSteps[i].previous === current.id){
                if(option3.previous !== props.adventure.AdventureSteps[i].previous){
                    setOption3(props.adventure.AdventureSteps[i]);
                    option3.id = props.adventure.AdventureSteps[i].id;
                    option3.response = props.adventure.AdventureSteps[i].response;
                    option3.text = props.adventure.AdventureSteps[i].text;
                    option3.isFirstStep = props.adventure.AdventureSteps[i].isFirstStep;
                    option3.option = props.adventure.AdventureSteps[i].option;
                    option3.previous = props.adventure.AdventureSteps[i].previous;
                } else
                if(option2.previous !== props.adventure.AdventureSteps[i].previous){
                    setOption2(props.adventure.AdventureSteps[i]);
                    option2.id = props.adventure.AdventureSteps[i].id;
                    option2.response = props.adventure.AdventureSteps[i].response;
                    option2.text = props.adventure.AdventureSteps[i].text;
                    option2.isFirstStep = props.adventure.AdventureSteps[i].isFirstStep;
                    option2.option = props.adventure.AdventureSteps[i].option;
                    option2.previous = props.adventure.AdventureSteps[i].previous;
                } else
                if(option1.previous !== props.adventure.AdventureSteps[i].previous){
                    setOption1(props.adventure.AdventureSteps[i]);
                    option1.id = props.adventure.AdventureSteps[i].id;
                    option1.response = props.adventure.AdventureSteps[i].response;
                    option1.text = props.adventure.AdventureSteps[i].text;
                    option1.isFirstStep = props.adventure.AdventureSteps[i].isFirstStep;
                    option1.option = props.adventure.AdventureSteps[i].option;
                    option1.previous = props.adventure.AdventureSteps[i].previous;
                    return;
                }
            }
        }
    }

    const handleSelect3 = () => {
        console.log(current);
        console.log(option3);
        current.id = option3.id;
        current.response = option3.response;
        current.text = option3.text;
        current.isFirstStep = option3.isFirstStep;
        current.option = option3.option;
        current.previous = option3.previous;
        option1.response = "";
        option2.response = "";
        option3.response = "";
        console.log(current);
        setCount(count+1)
        if(count>4){
            return;
        };
        for (let i = 0; i < props.adventure.AdventureSteps.length; i++) {
            console.log(props.adventure.AdventureSteps[i])
            if(props.adventure.AdventureSteps[i].previous === current.id){
                if(option3.previous !== props.adventure.AdventureSteps[i].previous){
                    setOption3(props.adventure.AdventureSteps[i]);
                    option3.id = props.adventure.AdventureSteps[i].id;
                    option3.response = props.adventure.AdventureSteps[i].response;
                    option3.text = props.adventure.AdventureSteps[i].text;
                    option3.isFirstStep = props.adventure.AdventureSteps[i].isFirstStep;
                    option3.option = props.adventure.AdventureSteps[i].option;
                    option3.previous = props.adventure.AdventureSteps[i].previous;
                } else
                if(option2.previous !== props.adventure.AdventureSteps[i].previous){
                    setOption2(props.adventure.AdventureSteps[i]);
                    option2.id = props.adventure.AdventureSteps[i].id;
                    option2.response = props.adventure.AdventureSteps[i].response;
                    option2.text = props.adventure.AdventureSteps[i].text;
                    option2.isFirstStep = props.adventure.AdventureSteps[i].isFirstStep;
                    option2.option = props.adventure.AdventureSteps[i].option;
                    option2.previous = props.adventure.AdventureSteps[i].previous;
                } else
                if(option1.previous !== props.adventure.AdventureSteps[i].previous){
                    setOption1(props.adventure.AdventureSteps[i]);
                    option1.id = props.adventure.AdventureSteps[i].id;
                    option1.response = props.adventure.AdventureSteps[i].response;
                    option1.text = props.adventure.AdventureSteps[i].text;
                    option1.isFirstStep = props.adventure.AdventureSteps[i].isFirstStep;
                    option1.option = props.adventure.AdventureSteps[i].option;
                    option1.previous = props.adventure.AdventureSteps[i].previous;
                    return;
                }
            }
        }
    }

    return (
        <div className="container">
          <div>
            <h2>{props.adventure.name}</h2>
            <h6>{props.adventure.description}</h6>
          </div>
          <div>
            {current.previous === "no" ? (
              <p>{props.adventure.opening}</p>
            ) : (
              <p>{current.text}</p>
            )}
          </div>
          <div>
            {option1.response ? (
              <button name="Option 1" onClick={handleSelect1}>
                {option1.response}
              </button>
            ) : null}
          </div>
          <div>
            {option2.response ? (
              <button name="Option 2" onClick={handleSelect2}>
                {option2.response}
              </button>
            ) : null}
          </div>
          <div>
            {option3.response ? (
              <button name="Option 3" onClick={handleSelect3}>
                {option3.response}
              </button>
            ) : null}
          </div>
        </div>
      );
    }