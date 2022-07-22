import React from 'react';
import Flashcard from './Flashcard';
import { byUnitsMisc } from './plutils';

function Flashcards(props) {
    let cards = [];

    if (props.deck === 'units-misc') {
        const cardsData = byUnitsMisc()
        const names = cardsData[0];
        const codes = cardsData[1];

        for (let i in names) {
            const nameSide = names[i];
            const codeSide = codes[i];
            cards.push(
                <Flashcard nameSide={nameSide} codeSide={codeSide} />
            )
        }

    }

    return (
        <div className='w-full h-full p-5 grid grid-cols-5 gap-5'>
            {cards}
        </div>
    )
}

export default Flashcards;