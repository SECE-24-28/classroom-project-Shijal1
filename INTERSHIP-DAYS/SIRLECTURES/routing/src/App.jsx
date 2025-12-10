import { useState } from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Gallary from './Gallary.jsx'
import PostPage from './PostPage'
import { Link, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        <li> <link to="/">Home</link></li>
        <li> <link to="/about">About</link></li>
        <li> <link to="/gallary">Gallary</link></li>
        <li> <link to="/postpage">PostPage</link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />

        <Route path="/postpage" element={<PostPage />}>
          <Route path=":id" element={<Post />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>

      </Routes>
    </>
  )
}

export default App