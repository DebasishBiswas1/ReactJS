import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
    return (
        <div className='w-screen flex flex-wrap bg-white justify-center text-black'>
            User:{userId}
        </div>
    )
}

export default User
