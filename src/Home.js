import React from 'react';
import { logOut } from './Firebase';

function Home() {
    return (
        <div id='home'>
            <h1>Plutato</h1>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}

export default Home;