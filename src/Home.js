import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import * as plutils from './plutils';
import DeckMenu from './DeckMenu';
import GameMenu from './GameMenu';
import Flashcard from './Flashcard';
import GridView from './GridView';

function Home() {
    const [currentDeck, setCurrentDeck] = useState(plutils['miscellaneousOrganic']);
    const [currentGame, setCurrentGame] = useState('grid');

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

    const buildDeck = (deckData) => {
        let cards = [];

        const names = deckData[0];
        const codes = deckData[1];

        for (let i in names) {
            const nameSide = names[i];
            const codeSide = codes[i];
            cards.push(
                <Flashcard
                    key={nameSide}
                    nameSide={nameSide}
                    codeSide={codeSide}
                />
            )
        }

        return cards;
    }

    const onChangeDeck = (e) => {
        setCurrentDeck(plutils[e.target.value]);
    }

    const onChangeGame = (e) => {
        setCurrentGame(e.target.value);
    }

    return (
        <div id='home' className="flex-col h-full">
            <header className="flex justify-center bg-gray-300 p-5">
                <h1 className="font-bold text-4xl">Plutato</h1>
            </header>
            <DeckMenu onChangeDeck={onChangeDeck} />
            <GameMenu onChangeGame={onChangeGame} />
            {currentGame === 'grid' && <GridView deck={buildDeck(currentDeck)} />}
            <button className="bg-red-500 font-semibold text-white p-3 w-full" onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;