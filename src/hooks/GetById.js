import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GetById() {
    const [post,setPost] = useState({})
    const [postId,setPostId] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then( res => {
            setPost(res.data)
        })
        .catch( err => console.log(err))
    },[postId])

  return (
    <div>
        <input type="text" value={postId} onChange={ e => setPostId(e.target.value)}/>
        <div> {post.title}</div>
    </div>
  )
}

export default GetById