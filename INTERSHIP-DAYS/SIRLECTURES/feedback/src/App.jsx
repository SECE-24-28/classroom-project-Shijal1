import { useState, useEffect } from 'react'       

import './App.css'
import api from './api/Post'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=>
  {
    const fetData=async()=>
    {
      const res=await api.get("/feedback")
      setPosts(res.data)  
    }
    fetData();
  },[])

  return (
    <>
      {
        posts.map((post)=>
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
          <hr />
        </div> )
      }
    </>
  )
}

export default App
