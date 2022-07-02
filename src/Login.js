import React, { useEffect, useContext } from 'react';
import { signInWithGoogle } from './Firebase';
import { UserContext } from './providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';

function Login() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    useEffect((prevUser) => {
        if (user) {
            addUser(user)
            navigate('/card')
        }
    }, [user, navigate])
    return (
        <div className="flex justify-center items-center bg-green-700 h-[100vh]">
            <GoogleButton onClick={signInWithGoogle} />
        </div>
    )
}

export default Login;