import { useGetUsersQuery } from './usersApiSlice'
import { Link } from 'react-router-dom'

import React from 'react'



const UsersList = () => {

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery()
    let content;
    if (isLoading) {
        content = <p>Loading..</p>
    } else if (isSuccess) {
        content = (
            <section className='userbase'>
                <h1>Users</h1>
                <ul>
                    {users.map((user, i) => {
                        return <li key={i}>{user.username}</li>
                    })}
                </ul>
            </section>
        )
    } else if (isError) {
        content = <p>Must be logged in to view Users</p>
    }
    return content

}

export default UsersList

