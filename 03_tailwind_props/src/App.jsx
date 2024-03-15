import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    color: "Green",
    price: 80000,
    buildQuality: "Titanium"
  }
  return (
    <>
      <h1 className='bg-green-500 rounded-xl p-5'>Welocome to tailwind and props</h1>
      <Card title="About iPhone 15 Pro" des={myObj}/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
