import React from 'react';
import { signInWithGoogle } from './Firebase';

function Login() {
    return (
        <div id='my-signin2' onClick={signInWithGoogle}></div>
    )
}

export default Login;