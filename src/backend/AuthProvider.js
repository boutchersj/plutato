import React, { useState, useEffect, createContext } from 'react';
import { auth } from './Firebase'
export const AuthContext = createContext(null);
const AuthProvider = (props) => {
    const [user, setuser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(setuser)
    },[])
    return (
        <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
    )
}
export default AuthProvider;