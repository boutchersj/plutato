import React, { useEffect } from 'react';
import { auth, googleProvider, signInWithGoogle } from '../../backend/Firebase';
import { GoogleButton } from 'react-google-button';
import { addUser } from '../../backend/backend';
import useAuthListener from '../../backend/useAuthListener';

function Login() {
    const user = useAuthListener()

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider).then((res) => {
            if (res.user) {
                addUser(res.user)
            }
        }).catch((error) => {
            console.error(error.message)
        })
    };

    const login = () => {
        if (user) {
            signInWithGoogle()
        }
    }

    return (
        <div className="flex justify-center items-center bg-green-700 h-[100vh]">
            <GoogleButton onClick={login} />
        </div>
    )
}

export default Login;