import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import * as plutils from './plutils';
import Flashcard from './Flashcard';
import GridView from './GridView';

function Home() {
    const [currentDeck, setCurrentDeck] = useState(plutils.byWeightMisc);
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
                <Flashcard nameSide={nameSide} codeSide={codeSide} />
            )
        }

        return cards;
    }
    
    const menuHeaderStyles = 'flex w-full bg-black text-white p-2 font-bold justify-center';

    const deckButtonContainerStyles = 'flex w-full justify-evenly bg-orange-300 p-5';
    const deckButtonStyles = 'border border-black border-2 p-2 mx-1 rounded-xl font-bold text-white bg-black';

    const onChangeDeck = (e) => {
        setCurrentDeck(plutils[e.target.value]);
    }

    const gameButtonContainerStyles = 'flex w-full justify-evenly bg-blue-300 p-5';
    const gameButtonStyles = 'border border-black border-2 p-2 rounded-xl font-bold text-white bg-black';

    const onChangeGame = (e) => {
        setCurrentGame(e.target.value);
    }

    return (
        <div id='home' className="flex-col h-full">
            <header className="flex justify-center bg-gray-300 p-5">
                <h1 className="font-bold text-4xl">Plutato</h1>
            </header>
            <h2 className={menuHeaderStyles}>Choose a Deck</h2>
            <section className={deckButtonContainerStyles}>
                <button onClick={onChangeDeck} value='byWeightMisc' className={deckButtonStyles}>By Weight - Miscellaneous</button>
                <button onClick={onChangeDeck} value='byUnitsMisc' className={deckButtonStyles}>By Units - Miscellaneous</button>
            </section>
            <h2 className={menuHeaderStyles}>Choose a Game</h2>
            <section className={gameButtonContainerStyles}>
                <button onClick={onChangeGame} value='grid' className={gameButtonStyles}>Grid</button>
            </section>
            {currentGame === 'grid' && <GridView deck={buildDeck(currentDeck)} />}
            <button className="bg-red-500 font-semibold text-white p-3 w-full" onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;