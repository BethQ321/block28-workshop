import { Link, useParams } from 'react-router-dom'

const SinglePost = ({posts}) => {

    const params = useParams()
    const id = params.id*1

    const onePost = posts.find((post) => {
        return post.id === id
    })

    if(!onePost) {
        return null
    } else {
        return (
            <div>
                <h1>{onePost.title}</h1>
                <p>{onePost.body}</p>
                <br />
                <Link to='/posts'>Back to all Posts</Link>
            </div>
        )
    }
    
}

export default SinglePost