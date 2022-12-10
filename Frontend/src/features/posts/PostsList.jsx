
import { useGetPostsQuery } from './postsApiSlice'
import { useState } from 'react'
import { useSendPostsMutation } from './postsApiSlice'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser, selectCurrentToken } from '../Auth/authSlice'
import { useDispatch } from 'react-redux'
import React from 'react'
import './postList.scss'
import CreatePost from './CreatePost'
import { useNavigate } from "react-router-dom";





const PostsList = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectCurrentUser)
    const [userPage, setUserPage] = useState('')
    const navigate = useNavigate();
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
                <CreatePost />
                <ul>
                    {posts.slice(0).reverse().map((post, i) => {
                        let classNames;
                        let classNameLeft = 'list-post-left'
                        let classNameRight = 'list-post-right'
                        if (user === post.name) {
                            classNames = classNameRight

                        } else {
                            classNames = classNameLeft
                        }



                        return <li key={i} className={classNames}><button value={post.name} onClick={(e) => navigate(`/users/${e.target.value}`)}>{post.name}</button> wrote:  {post.message}</li>
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

