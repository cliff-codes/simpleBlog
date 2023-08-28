import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './postSlice'


const AddPostForm = () => {
    const [postTitle, setPostTitle] = useState()
    const [postContent, setPostContent] = useState()

    const dispatch = useDispatch()

    return (
    <form onSubmit={(e) => e.preventDefault()}>
        <div>
            <label>Post Title</label>
            <div><input onChange={(e) => setPostTitle(e.target.value)}/></div>
        </div>
        <div>
            <label>Content</label>
            <div>
                <textarea onChange={(e) => setPostContent(e.target.value)}>

                </textarea>
            </div>
        </div>
        <button style={{background: "grey"}} onClick={() => {dispatch(addPost(postTitle,postContent))
            console.log({postTitle, postContent})
        }}>Post</button>
    </form>
  )
}

export default AddPostForm