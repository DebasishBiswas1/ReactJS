import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length , setlength] = useState(8);
  const [numAllowed , setnumAllowed] = useState(false);
  const [charAllowed , setcharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  // RefHook
  const passWordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "~`@#$%^&*(){}[]=+-_/?<>:";

    for (let i = 0; i < length; i++) {
      let char = Math.floor((Math.random() * str.length + 1 ));
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length,numAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passWordRef.current?.select();
    // To select a particular range -->
    // passWordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password);
    alert("Password Copied");
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator])

  return (

    <div className="w-full p-4 m-8 rounded-lg bg-gray-700 text-orange-500 max-w-md shadow-md ">
      <h2 className='text-center text-white p-3'>Password Generator</h2>
      <div className='flex shadow overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='rounded-r-none rounded-l-lg outline-none w-full py-2 px-3 bg-slate-50 max-w-screen-sm'
          placeholder='password'
          readOnly
          ref={passWordRef}

        />
        <button 
        onClick={copyPasswordToClipboard}
        class="rounded-r-lg rounded-l-none border border-transparent py-1 px-3 text-center text-lg transition-all text-slate-300 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Copy
        </button>

      </div>
      <div className='flex gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
            min={6}
            max={50}
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
