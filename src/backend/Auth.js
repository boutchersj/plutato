import React, { useEffect, useState, createContext } from 'react';
import { auth } from './Firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser)
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser }}>
            { children }
        </AuthContext.Provider>
    )
}