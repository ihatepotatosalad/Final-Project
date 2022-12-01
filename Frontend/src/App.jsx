//dependecies
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from "react-bootstrap"

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
          <Route path='/fourm' element={<Fourm />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>

      </Container>
    </>
  )
}

export default App
