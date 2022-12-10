//dependecies
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from "react-bootstrap"
import Welcome from './features/Auth/Welcome'
import RequireAuth from './features/Auth/RequireAuth'
// import UsersList from './features/users/usersList'
import { logOut } from './features/Auth/authSlice'
import PersistLogin from './features/Auth/PersistLogin'
import UsersList from './features/users/UsersList'
import CertainUser from './pages/CertainUser'



//pages
import Home from './pages/Home'
import Login from './pages/Login'
import Fourm from './pages/Fourm'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'



function App() {


  return (
    <>

      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<UsersList />} />
          <Route path='/refresh' element={<PersistLogin />} />

          <Route path='/fourm' element={<Fourm />} />
          <Route path='/users/:id' element={<CertainUser />} loader={({ params }) => {
            console.log(params.id)
          }} />
          <Route path='/signup' element={<Signup />} />

          <Route element={<RequireAuth />} />

          <Route path='welcome' element={<Welcome />} />

        </Routes>


      </Container>

    </>
  )
}

export default App
