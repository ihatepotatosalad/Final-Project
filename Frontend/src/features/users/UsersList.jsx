import { useGetUsersQuery } from './usersApiSlice'
import { Link } from 'react-router-dom'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './usersList.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../Auth/authSlice';



const UsersList = () => {
    const user = useSelector(selectCurrentUser)
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery()

    //onhover tooltip 

    let content;
    if (isLoading) {
        content = <p>Loading..</p>
    } else if (isSuccess && user) {
        content = (
            <section className='userbase'>
                <h1>Users</h1>
                <ul>
                    {users.map((user, i) => {
                        const renderTooltip = (props) => {

                            return (
                                <Tooltip key={i} id="button-tooltip" {...props}>
                                    Posts Made: {user.postCreated}

                                </Tooltip>
                            )
                        }
                        return (
                            <OverlayTrigger key={i}
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <li key={i} className='user-list'>{user.username}</li>
                            </OverlayTrigger>

                        )
                    })}
                </ul>
            </section>
        )
    } else if (isError) {
        content = <p>Must be logged in to view Users</p>
    } else {
        content = <p>Must be logged in to view Users</p>
    }
    return content

}

export default UsersList

