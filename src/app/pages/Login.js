import React from 'react';
import { auth, googleProvider } from '../../backend/Firebase';
import { GoogleButton } from 'react-google-button';
import { addUser } from '../../backend/backend';
// import { useEffect } from 'react';
// import useAuthListener from '../../backend/useAuthListener';
// import { useNavigate } from 'react-router-dom';

function Login() {
    // const user = useAuthListener()
    // const navigate = useNavigate();

    
    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider).then((res) => {
            addUser(res.user)
            console.log(res.user)
        }).catch((error) => {
            console.error(error.message)
        })
    };

    // useEffect(() => {
    //     if (user) {
    //         console.log(user)
    //         navigate('/home')
    //     }
    // }, [user, navigate])

    return (
        <div className="flex justify-center items-center bg-green-700 h-[100vh]">
            <GoogleButton onClick={signInWithGoogle} />
        </div>
    )
}

export default Login;