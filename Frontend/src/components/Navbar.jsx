import React from 'react'
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser, selectCurrentToken } from '../features/Auth/authSlice'
import { useDispatch } from 'react-redux'
import { logOut } from '../features/Auth/authSlice'



const Navbar = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)


    let logOutbutton;
    let userRoles
    if (user) {
        logOutbutton = <button onClick={() => dispatch(logOut())}>Logout</button>

    }

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
                    {logOutbutton}

                </Nav>
                <button>{user ? user : "Guest"}</button>
            </Container>

        </NavbarBs>
    )
}

export default Navbar