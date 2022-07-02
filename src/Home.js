import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from './Firebase';

function Home() {
    const navigate = useNavigate();
    const logout = () => {
        logout();
        navigate('/');
    }
    return (
        <div id='home'>
            <h1>Plutato</h1>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}

export default Home;