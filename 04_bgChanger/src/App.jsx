import { useState } from 'react'
import './App.css'
import { Color } from './components/Color'

function App() {
  const [color, setColor] = useState('#212121');

  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className="pallate" style={{padding: '20px 15px',borderRadius: '15px', backgroundColor: 'white',display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "20px"}}>
        {/* <Color colorName='red'/>
        <Color colorName='green'/>
        <Color colorName='blue'/> */}
        <button onClick={()=> setColor('red')} style={{backgroundColor: 'red', padding: "10px", width: "100px", borderRadius: "10px", outline: 'none'}} >Red</button>
        <button onClick={()=> setColor('green')} style={{backgroundColor: 'green', padding: "10px", width: "100px", borderRadius: "10px", outline: 'none'}} >Green</button>
        <button onClick={()=> setColor('blue')} style={{backgroundColor: 'blue', padding: "10px", width: "100px", borderRadius: "10px", outline: 'none'}} >Blue</button>
        <button onClick={()=> setColor('yellow')} style={{backgroundColor: 'yellow',color: 'black', padding: "10px", width: "100px", borderRadius: "10px", outline: 'none'}} >Yellow</button>
        <button onClick={()=> setColor('pink')} style={{backgroundColor: 'pink', padding: "10px", width: "100px", borderRadius: "10px", outline: 'none'}} >Pink</button>
        <button onClick={()=> setColor('white')} style={{backgroundColor: 'white', color: 'black', padding: "10px", width: "100px", borderRadius: "10px", outline: 'none'}} >White</button>
        <button onClick={()=> setColor('black')} style={{backgroundColor: 'black', padding: "10px", width: "100px", borderRadius: "10px", outline: 'none'}} >Black</button>
      </div>
    </div>
    </>
  )
}

export default App
