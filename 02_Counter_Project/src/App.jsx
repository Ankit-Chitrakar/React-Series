import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(1);
  // let counter = 1;

  // why hooks --> React is used for changeing and syncing all the componants state together 
  // if we change a componant by this all the componant ui and value will change 
  // so we used React hooks 

  // UseState Hook  --> is used to change state of componants 
  // first one in the array is variable and second one is a function to change the 
  // first variable through out the states

  const addVal = ()=>{
    if(counter < 20){
      setCounter(counter+1);
    }
    else{
      alert("Can't add more than 20..")
    }
  }

  const removeVal = ()=>{
    if(counter <= 0){
      alert("Can't be a negative number..")
    }
    else{
      setCounter(counter-1);
    }
  }
  
  return (
    <>
    <h1>Chai Aur Code ~ React Series</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addVal}>Add Value</button>
    <button onClick={removeVal}>Remove Value</button>

    <p>Componant Val : {counter}</p>
    <footer>Footer Value : {counter}</footer>

    </>
  )
}

export default App
