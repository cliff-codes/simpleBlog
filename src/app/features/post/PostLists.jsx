import React from 'react'
import { useSelector } from 'react-redux'
import { posts } from './postSlice'


const PostLists = () => {
    const allPosts = useSelector(posts)
  return (
    <div>
        <div>Posts</div>
        <ul style={{listStyle: "none"}}>
            {allPosts.map(post => (
                <li key={post.id} style={{background: "#0101", borderRadius: "3px", marginBottom: "5px"}}>
                    <div style={{textTransform: "capitalize", fontWeight: "600"}}>{post.title}</div>
                    <div>{post.content}</div> 
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PostLists