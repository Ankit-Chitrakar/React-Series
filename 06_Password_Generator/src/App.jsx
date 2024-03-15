import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  
  // declare all states
  const [length, setLength] = useState(4);
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef store the reference of previous state / current state
  const passwordRef = useRef(null)
 

  // using useCallback hook for better performance because useCallback hook memorize previous state
  // and help to useEffect hook

  const passwordGenerator = useCallback(()=>{
    // console.log(length, numbersAllowed, charactersAllowed, password);

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed) str += "0123456789"
    if(charactersAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i = 1; i <= length; i++){
      let random_index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(random_index);
    }

    setPassword(pass)

  }, [length, numbersAllowed, charactersAllowed, setPassword])

  const handleCopyToClipBoard = ()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5)   // select within a range
    window.navigator.clipboard.writeText(password)
  }


  // when the component mounted first useEffect hook called
  // we call the passwordGenerator func starting of project and when length, numbers, characters
  // are changed then this passwordGenerator func will also called

  useEffect(()=>{
    passwordGenerator();
  }, [length, numbersAllowed, charactersAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-10 py-4 my-8 bg-gray-800 text-orange-500">
        
        <h1 className="text-white text-center my-3">Password generator</h1>

        {/* input field and copy button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            className="outline-none w-full py-1 px-3"
            ref={passwordRef}
            onChange={(e)=> setPassword(e.target.value)}
          />

          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={handleCopyToClipBoard}
          >
            copy
          </button>

        </div>

        {/* features of password generator */}
        <div className="flex text-sm gap-x-2">

        {/* range slider of password length */}
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={4}
            max={16}
            value={length}
            className="cursor-pointer"
            id="password_length"
            onChange={(e)=> setLength(e.target.value)}
            />
            <label htmlFor="password_length">Length: {length}</label>
          </div>

          {/* including numbers checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              id="number"
              onChange={()=> setNumbersAllowed((prevValue) => !prevValue)}
            />
            <label htmlFor="number">Numbers</label>
          </div>

          {/* including special Charaters checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              id="specialCharacters"
              onChange={()=> setCharactersAllowed((prevValue) => !prevValue)}
            />
            <label htmlFor="specialCharacters">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
