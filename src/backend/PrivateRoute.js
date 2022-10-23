import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ user }) {
    return user ? <Navigate to="/" /> : <Navigate to="/login" />;
}