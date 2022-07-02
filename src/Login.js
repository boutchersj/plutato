import React from 'react';
import { signInWithGoogle } from './Firebase';
import { GoogleButton } from 'react-google-button';

function Login() {
    return (
        <GoogleButton onClick={signInWithGoogle} />
    )
}

export default Login;