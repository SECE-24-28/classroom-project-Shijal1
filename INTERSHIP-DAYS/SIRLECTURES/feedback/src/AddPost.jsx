import React from 'react'

const AddPost = (title,setTitle,body,setBody) => {
  return (
    <div>
        <form action="">
            <input type="text" name="" id="" placeholder='Title'/>
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            <br></br>
            <textarea name="" id="" placeholder='Body'></textarea>
            <br></br>
            <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default AddPost