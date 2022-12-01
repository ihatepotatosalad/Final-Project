import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/Auth/authSlice'
import { useLoginMutation } from '../features/Auth/authApiSlice'
const Login = () => {
  const userRef = useRef()
  const errRef = useRef()
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userData = await login({ user, pwd }).unwrap()
      dispatch(setCredentials({ ...userData, user }))
      setUser('')
      setPwd('')
      navigate('/')
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No response from server');
      } else if (err.response?.status === 400) {
        setErrMsg('Please enter both username and password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed')
      }
      errRef.current.focus();

    }
  }

  const handleUserInput = (e) => setUser(e.target.value)
  const handlePwdInput = (e) => setUser(e.target.value)

  const content = isLoading ? <h1>Loading...</h1> : (
    <section className="login">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          ref={userRef}
          value={user}
          onChange={handleUserInput}
          required />
        <label htmlFor='password'>Password:</label>
        <input
          type='text'
          id='password'
          value={pwd}
          onChange={handlePwdInput}
          required />
        <button>Login</button>
      </form>
    </section>
  )
  return (
    <div>{content}</div>
  )
}

export default Login