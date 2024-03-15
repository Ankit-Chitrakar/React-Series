import {React, useEffect, useState} from "react";

export const HookUseEffect = ()=>{

    const [value, setValue] = useState(0);

    const removeValue = ()=>{
        setValue((prevValue) => prevValue - 1);
    }

    const addValue = ()=>{
        setValue((prevValue) => prevValue + 1);
    }

    // useEffect(()=>{}, []) // basic syntax of useEffcet hook

    // useEffect hook reacts for the first time when the webpage mounted
    // useEffect hook runs its code for the first time no matter there was no dependencies array
    // dependecies array create dependecies when the useEffect hook shoud run

    useEffect(()=>{
        // hook mounted
        console.log("The count = ", value);

        // unmounted --> we have to destroy previous effct of useEffct 
        // before the state has been changed

        return ()=>{
            console.log("previous version of useEffct Hook destroyed")
        }

    }, [value])

    // frst previous hook unmounted/destroyed then new state has been generated

    return (
        <>
            <button 
            onClick={removeValue}
            style={{fontSize: '2rem', padding: '5px 15px', backgroundColor: 'cyan', color: 'black', margin: '0px 15px', outline: 'none'}}>
                -
            </button>

            <span 
            style={{fontSize: '2rem', padding: '5px 15px', backgroundColor: 'blue', margin: '0px 15px'}}>
                {value}
            </span>

            <button 
            onClick={addValue}
            style={{fontSize: '2rem', padding: '5px 15px', backgroundColor: 'cyan',color: 'black', margin: '0px 15px', outline: 'none'}}>
                +
            </button>
        </>
    )
}