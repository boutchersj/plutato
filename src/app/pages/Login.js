import React, { useEffect } from 'react';
import { signInWithGoogle } from '../../backend/Firebase';
import { GoogleButton } from 'react-google-button';
import { addUser } from '../../backend/backend';

function Login() {
    return (
        <div className="flex justify-center items-center bg-green-700 h-[100vh]">
            <GoogleButton onClick={signInWithGoogle} />
        </div>
    )
}

export default Login;