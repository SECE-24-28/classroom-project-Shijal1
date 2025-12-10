import React from 'react'

const PostPage = () => {
  return (
    <div>
        <ol>
            <li> <Link to="/postpage/1">Post 1</Link> </li>
            <li> <Link to="/postpage/2">Post 2</Link> </li>
            <li> <Link to="/postpage/3">Post 3</Link> </li>
            <li> <Link to="/postpage/newpost">NewPost</Link> </li>
        </ol>

        <Outlet />
    </div>
  )
}

export default PostPage