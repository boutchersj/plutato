import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Auth';
import Home from '../app/pages/Home'

const PrivateRoute = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        !!currentUser ? (
            <Home />
        ) : (
            <Navigate to={"/login"} />
        )
    )
}

export default PrivateRoute