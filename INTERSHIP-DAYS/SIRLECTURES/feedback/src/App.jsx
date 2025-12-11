import { useState, useEffect } from 'react'       
import './App.css'
import api from './api/Post'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
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

  const handleSubmit=(e)=>{
    e.preventDefault()
    const id=(posts.length)?(Number(posts[posts.length-1].id)+1):(1)
    const datetime=format(new Date(),"MMM dd yyyy pp")
    const newObj={id,title,datetime,body}
    api.post("/feedback",newObj)
    const newList=[posts,newObj]
    setPosts(newList)
    setTitle('')
    setBody('')
  }
  return (
    <>
     <AddPost title={title} setTitle={setTitle} body={body} setBody={setBody} handleSubmit={handleSubmit}/>
      <Search search={search} setSearch={setSearch}/>
      <Home searchResult={searchResult} />
     
    </>
  )
}

export default App
