import React, { useState } from 'react';

function Flashcards(props) {
    const [side,setSide] = useState(true)
    const flipCard = () => {
        setSide(!side);
    }
    const names = Object.keys(deck);
    const flashCards = props.deck.map(item => {
        const name = names[deck.indexOf(item)]
        const code = deck[item]
        return (
            <div className="flex justify-center items-center p-16 text-xl border border-black w-[25%] h-[25%]" onClick={flipCard}>
                <p>{side ? name : code}</p>
            </div>
        )
    });
    return (
        {flashCards}
    )
}

export default Flashcards;