import { useEffect, useState } from 'react'
import './App.css'
import { Link, useLocation, Route, Routes, useParams } from 'react-router-dom'
import axios from 'axios'
import Homepage from './Home'
import Users from './Users'
import SingleUser from './SingleUser'
import Posts from './Posts'
import SinglePost from './SinglePost'

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const location = useLocation()
  const {pathname} = location

  useEffect(() => {
    const fetchUsers = async() => {
      const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      setUsers(data)
    }
    fetchUsers()
  }, [])
  console.log(users)

  useEffect(() => {
    const fetchPosts = async() => {
      const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
      setPosts(data)
    }
    fetchPosts()
  }, [])
  console.log(posts)

  return (
    <div>
      <nav>
        <Link to='/' className={pathname === "/" ? "selected" : ""} >Home</Link>
        <Link to='/users' className={pathname === "/users" ? "selected" : ""} >Users {users.length}</Link>
        <Link to='/posts' className={pathname === "/posts" ? "selected" : ""} >Posts {posts.length}</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/users' element={<Users users={users} />} />
        <Route path='/users/:id' element={<SingleUser users={users} />} />
        <Route path='/posts' element={<Posts posts={posts} />} />
        <Route path='/posts/:id' element={<SinglePost posts={posts} />} />
      </Routes>
    </div>
  )
}

export default App
