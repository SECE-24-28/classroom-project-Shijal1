import { useState, useEffect } from 'react'       
import './App.css'
import api from './api/Post'
import Home from './Home'

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])

// fetch the data
// load the data
  useEffect(()=>
  {
    const fetData=async()=>
    {
      const res=await api.get("/feedback")
      setPosts(res.data)  
    }
    fetData();
  },[])

  //search
  useEffect(()=>
  {
    const filtered = posts.filter((post)=>(post.title).includes(search))
    setSearchResult(filtered)
  },[posts, search])

  return (
    <>
      <input type="text" value={search}
                         onChange={(e)=>setSearch(e.target.value)} />
      <Home searchResult={searchResult} />
    </>
  )
}

export default App
