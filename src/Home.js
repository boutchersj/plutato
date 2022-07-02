import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import Flashcard from './Flashcard';

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
        <div id='home' className="flex-col bg-purple-400 h-[100vh]">
            <header className="flex items-center bg-white">
                <h1 className="font-bold text-2xl ml-auto">Plutato</h1>
                <button className="border border-white rounded-lg bg-red-500 font-semibold text-white h-12 w-24 ml-auto" onClick={logout}>Logout</button>
            </header>
            <section className="flex justify-center items-center h-[50%]">
                <Flashcard />
            </section>
        </div>
    )
}

export default Home;