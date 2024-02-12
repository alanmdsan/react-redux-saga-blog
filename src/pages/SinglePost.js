import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import PostDetails from '../components/PostDetails'
import { getPostDetails } from '../store/posts/actions'

function SinglePost() {
  let params = useParams()
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostDetails(params.id))
  }, [dispatch, params.id])

  return (
    <Container className="single-post">
      <PostDetails />
    </Container>
  )
}

export default SinglePost
