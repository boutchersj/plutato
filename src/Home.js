import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';

function Home() {
    const navigate = useNavigate();
    const logout = () => {
        auth.signOut()
            .then(()=> {
                console.log('logged out');
                navigate('/');
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    return (
        <div id='home'>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;