import { useGetPostsQuery } from './postsApiSlice'
import { Link } from 'react-router-dom'

import React from 'react'




const PostsList = () => {

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
    } else if (isSuccess) {
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
        content = <p>{JSON.stringify(error)}</p>
    }
    return content

}

export default PostsList
