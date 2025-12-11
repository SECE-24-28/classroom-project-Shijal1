import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [posts, setPosts] = useState([])
useEffect(()=>{
  const fetData=async()=>{
    const res=await applyActionCode.get("/feedback")
    console.log(res.data)
  }
  fetData();
},[])
  return (
    <>
      
    </>
  )
}

export default App
