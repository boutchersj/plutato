import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import { byUnitsMisc, byWeightMisc } from './plutils';
import Flashcard from './Flashcard';
import Flashcards from './Flashcards';

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

    const buildDeck = (deck) => {
        let cards = [];

        const cardsData = deck()
        const names = cardsData[0];
        const codes = cardsData[1];

        for (let i in names) {
            const nameSide = names[i];
            const codeSide = codes[i];
            cards.push(
                <Flashcard nameSide={nameSide} codeSide={codeSide} />
            )
        }

        return cards;
    }

    return (
        <div id='home' className="flex-col h-full">
            <header className="flex items-center bg-gray-300 p-5">
                <h1 className="font-bold text-4xl ml-auto">Plutato</h1>
                <button className="border border-white rounded-lg bg-red-500 font-semibold text-white h-12 w-24 ml-auto" onClick={logout}>Logout</button>
            </header>
            <section className="flex justify-center items-center w-full h-full p-10 bg-emerald-400">
                <Flashcards deck={buildDeck(byWeightMisc)} />
            </section>
        </div>
    )
}

export default Home;