import { useGetPostsQuery } from './postsApiSlice'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser, selectCurrentToken } from '../Auth/authSlice'
import { useDispatch } from 'react-redux'
import React from 'react'




const PostsList = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectCurrentUser)
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()
    let content;
    if (isLoading) {
        content = <p>Loading..</p>
    } else if (isSuccess && user) {
        content = (
            <section className='postsbase'>
                <h1>Posts</h1>
                <ul>
                    {posts.map((post, i) => {
                        return <li key={i}>{post.name} wrote:  {post.message}</li>
                    })}
                </ul>

            </section>
        )
    } else if (isError) {
        content = <p>You must be logged in to see Posts</p>
    } else {
        content = <p>You must be logged in to see Posts</p>
    }
    return content

}

export default PostsList
