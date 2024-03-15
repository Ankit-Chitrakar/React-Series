import React, { useState } from "react"
export const HookUseState = ()=>{

    // useState hook changes state of any elements returns an array [state, func that changes that state] = useState(initial value of state)

    const [value, setValue] = useState(1);

    // if we pass object in the initial state

    const [counter, setCounter] = useState({
        id: 101,
        name: 'amit'
    })   

    // better use is seperate every objects key value pair for id and name 

    const addValue = ()=>{
        setValue((prevValue)=> prevValue + 1);

        setCounter((prevValue)=> {
            return {    /// how to deal with objects in useState
                ...prevValue,
                id: prevValue.id + 10,
                name: prevValue.name + 'a'
            }
        })
    }

    const removeValue = ()=>{
        setValue((prevValue)=>{
            return prevValue - 1;
        })

        setCounter((prevValue)=> {
            return{
                ...prevValue,
                id: prevValue.id - 10,
                name: prevValue.name.slice(0, -1)
            }
        })
    }



    return (
        <>
            <button 
            onClick={removeValue}
            style={{fontSize: '2rem', padding: '5px 15px', backgroundColor: 'cyan', color: 'black', margin: '0px 15px', outline: 'none'}}>
                -
            </button>

            <span 
            style={{fontSize: '2rem', padding: '5px 15px', backgroundColor: 'blue', margin: '0px 15px'}}>
                {value}, {counter.id}, {counter.name}
            </span>

            <button 
            onClick={addValue}
            style={{fontSize: '2rem', padding: '5px 15px', backgroundColor: 'cyan',color: 'black', margin: '0px 15px', outline: 'none'}}>
                +
            </button>
        </>
    )
}