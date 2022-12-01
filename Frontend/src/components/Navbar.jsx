import React from 'react'
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <NavbarBs className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/login' as={NavLink}>
                        Login
                    </Nav.Link>
                    <Nav.Link to='/fourm' as={NavLink}>
                        Fourm
                    </Nav.Link>
                    <Nav.Link to='/signup' as={NavLink}>
                        Signup
                    </Nav.Link>
                </Nav>
                <button>usernamehere</button>
            </Container>

        </NavbarBs>
    )
}

export default Navbar