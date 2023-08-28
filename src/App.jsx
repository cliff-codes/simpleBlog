
import './App.css'
import AddPostForm from './app/features/post/AddPostForm'
import PostLists from './app/features/post/PostLists'

function App() {

  return (
    <>
      <div>Simple Blog</div>
      <div>
        <AddPostForm/>
        <PostLists/>
      </div>
    </>
  )
}

export default App
