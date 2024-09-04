import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count , setValue] = useState(0);

  const addValue = ()=>{
    console.log(count);
    if(count < 20){
      setValue(count+1);
    }
  }
  const removeValue = ()=>{
    console.log(count);
    if(count > 0){
      setValue(count-1);
    }
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is : {count}</h1>

      <div className="card">
        <button  onClick={addValue}>
          Increase Count
        </button>
        <button  onClick={removeValue}>
          Decrease Count
        </button>
      </div>
    </>
  )
}

export default App
