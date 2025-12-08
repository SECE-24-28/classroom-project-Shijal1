import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let city="kovai";
let nums=[11,22,33];
  return (
    <>
   <h1>React is Not a framework, it is a library framework</h1>
   <p>I am from {city}</p>
   <p>Lucky numbers {nums}</p>
   <p>
  {1==2}
   </p>
   {/* cant print directly like object like <p>{name:"Rohit",age:40}</p> */}
   <p>{JSON.stringify({name:"Rohit",age:40})}</p>
    </>
  )
}

export default App
