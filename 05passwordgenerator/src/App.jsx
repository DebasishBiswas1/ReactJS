import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length , setlength] = useState(8);
  const [numAllowed , setnumAllowed] = useState(false);
  const [charAllowed , setcharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "~`@#$%^&*(){}[]=+-_/?<>:";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor((Math.random() * str.length + 1 ));
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length,numAllowed,charAllowed,setPassword])

  return (

    <div className="w-full p-4 m-8 rounded-lg bg-gray-700 text-orange-100 max-w-md shadow-md ">
      <h2 className='text-center text-white p-3'>Password Generator</h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='outline-black w-full py-1 px-3 bg-slate-50'
          placeholder='password'
          readOnly

        />
        <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
          Copy
          </span>
        </button>
      </div>
      <div className='flex gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
            min={6}
            max={15}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox'
            defaultChecked={numAllowed}
            onChange={(e)=>{setnumAllowed((prev)=>!prev)}}
          />
          <label>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox'
            defaultChecked={charAllowed}
            onChange={(e)=>{setcharAllowed((prev)=>!prev)}}
          />
          <label>Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
