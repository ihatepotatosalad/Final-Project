import { useSelector, useDispatch } from 'react-redux'

import { selectCurrentUser, selectCurrentToken } from '../Auth/authSlice'
import { useSendPostsMutation } from './postsApiSlice'
import { useState } from 'react'

import React from 'react'
import './createPost.scss'

const CreatePost = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [errMsg, setErrMsg] = useState('')



    const dispatch = useDispatch()

    const [sendPost] = useSendPostsMutation()



    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            sendPost({ msg: message })

            // setTitle('')
            setMessage('')

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No response from server');
            } else if (err.response?.status === 400) {
                setErrMsg('Please enter both title and content field');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Posting Failed')
            }


        }
    }

    const handleTitleInput = (e) => setTitle(e.target.value)
    const handleContentInput = (e) => setMessage(e.target.value)


    return (
        <section className="Post-Form">
            <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
            <h1 className='greeting'>New Post</h1>

            <form onSubmit={handleSubmit}>
                {/* <label htmlFor='Title'>Title</label>
                <input
                    type='text'
                    id='Title'

                    value={title}
                    onChange={handleTitleInput}
                    required /> */}
                <label htmlFor='message'>Message:</label>
                <input
                    type='text'
                    id='message'
                    value={message}
                    onChange={handleContentInput}
                    required />
                <button>Post</button>
            </form>
        </section>
    )
}

export default CreatePost