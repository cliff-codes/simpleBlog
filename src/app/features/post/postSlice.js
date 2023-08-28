import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts: [{id: 1, title: "this is my first post", content: "Learning redux"},{id: 2, title: "this is my second post", content: "Learning is good"}]
}

const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        addPost: {
            reducer(state,action){
                state.posts.push(action.payload)
            },
            prepare(title,content){
                return {
                    payload: {
                        id: nanoid(3),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const posts = (state) => state.posts.posts
export const {addPost} = postSlice.actions
export default postSlice.reducer
