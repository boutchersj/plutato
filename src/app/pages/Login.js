import React, { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { auth, googleProvider } from '../../backend/Firebase';
import { GoogleButton } from 'react-google-button';
import { addUser } from '../../backend/backend';
import { AuthContext } from '../../backend/Auth';

function Login() {
    const navigate = useNavigate()
    const signInWithGoogle = (event) => {
        event.preventDefault()
        auth.signInWithPopup(googleProvider).then((res) => {
            addUser(res.user)
            console.log(res.user)
            navigate('/')
        }).catch((error) => {
            alert(error)
            console.error(error.message)
        })
    };

    const { currentUser } = useContext(AuthContext)

    return (
        !!currentUser
        ? <Navigate to='/' />
        : (
            <div className="flex justify-center items-center bg-green-700 h-[100vh]">
                <GoogleButton onClick={signInWithGoogle} />
            </div>
        )
    )
}

export default Login;