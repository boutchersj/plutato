import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './Auth';

const PrivateRoute = () => {
    const { currentUser } = useContext(AuthContext)
    const loading = currentUser === undefined
    console.log(currentUser)

    return loading ? (
        <h1>Loading...</h1>
    ):
    currentUser ? (
        <Outlet />
    ): (
        <Navigate to='/login' />
    )
}

export default PrivateRoute