import React from 'react';
import { signInWithGoogle } from './Firebase';

function Login() {
    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

export default Login;