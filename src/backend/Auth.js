import React, { useEffect, useState, createContext } from 'react';
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const { loading, error } = useAuthState(auth)

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser)
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser }}>
            { loading ? <Loading /> : children }
        </AuthContext.Provider>
    )
}