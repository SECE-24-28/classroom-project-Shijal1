import { useState, useEffect } from 'react'
import './App.css'
import api from './api/Post'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import { format } from 'date-fns'
import { DataProvider } from '../context/DataContext'

function App() {
  
  return (
    <>    
<DataProvider>
      <Search search={search} setSearch={setSearch} />
      <AddPost title={title} setTitle={setTitle} body={body} setBody={setBody} handleSubmit={handleSubmit} />
      <Home searchResult={searchResult} />
</DataProvider>      
    </>
  )
}

export default App
