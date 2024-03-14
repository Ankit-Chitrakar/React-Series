import { useState } from 'react';
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  // const value = 5;

  const addVal = ()=>{
    // setValue(value+1);
    setValue((prevValue)=> prevValue + 1)
    setValue((prevValue)=> prevValue + 1)
    setValue((prevValue)=> prevValue + 1)
    setValue((prevValue)=> prevValue + 1)
  }
  const removeVal = ()=>{
    // setValue(value-1)
    setValue((prevValue)=> prevValue - 1)
    setValue((prevValue)=> prevValue - 1)
  }

  return (
    <>
      <h1>Welcome to Chai aur Code Value: {value}</h1>
      <p>Value: {value}</p>
      <button onClick={addVal}>Add Value</button>
      <button onClick={removeVal}>Remove Value</button>
      <footer>Value of Footer: {value}</footer>
    </>
  )
}

export default App
