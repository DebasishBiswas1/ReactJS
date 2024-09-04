import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black  p-5 rounded-xl mb-5">Hello Debasish! Welcome Back...</h1>
      <Card Channel="ChaiAurCode" btnText="Click me"/>
      <Card Channel="Hitesh" btnText="Visit me"/>
      
    </>
  )
}

export default App
