import React, { useState } from 'react';
import { byUnitsMisc } from './plutils';

function Flashcards(props) {
    const [side,setSide] = useState(true)
    const flipCard = () => {
        setSide(!side);
    }
    let cards = [];

    if (props.deck === 'units-misc') {
        const cardsData = byUnitsMisc()
        const names = cardsData[0];
        const codes = cardsData[1];

        for (let i in names) {
            const nameSide = names[i];
            const codeSide = codes[i];
            cards.push(
                <div className="flex justify-center items-center p-16 text-xl border border-black w-48 h-48" onClick={flipCard}>
                    <p>{side ? nameSide : codeSide}</p>
                </div>
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