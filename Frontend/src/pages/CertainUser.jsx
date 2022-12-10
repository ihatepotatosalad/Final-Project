import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import { useGetUserByIdQuery } from '../features/users/usersApiSlice'


function CertainUser() {
    const { id } = useParams()
    const {
        data: selectUser,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUserByIdQuery(id)

    let content;
    if (isLoading) {
        content = <p>Loading..</p>
    } else if (isSuccess /*&& user*/) {
        content = (
            <section className='postsbase'>
                <h1>{selectUser.username}</h1>
                <h2>Post Created: {selectUser.postCreated}</h2>
                <h2>{selectUser.roles.Admin ? `${selectUser.username} is an Admin user` : `${selectUser.username} is not an Admin user`}</h2>


            </section>
        )
    } else if (isError) {
        content = <p>No user Found</p>
    } else {
        content = <p>YNo user Found</p>
    }
    return content

}

export default CertainUser