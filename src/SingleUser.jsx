import { Link, useParams } from 'react-router-dom'


const SingleUser = ({users}) => {

    const params = useParams()
    const id = params.id*1

    const oneUser = users.find((user) => {
      return user.id === id
    })
    
    if(!oneUser) {
      return null
    } else {
      return (
        <div>
          <h1>{oneUser.name}</h1>
          <h3>Company: {oneUser.company.name}</h3>
          <h3>Email: {oneUser.email}</h3>
          <h3>Phone: {oneUser.phone}</h3>
          <h3>Username: {oneUser.username} </h3>
          <h3>Website: {oneUser.website} </h3>
          <br />
          <Link to='/users'>Back to all Users</Link>
        </div>
      )
    }

  }

  export default SingleUser