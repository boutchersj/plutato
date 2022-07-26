import React from 'react';

function DeckMenuButton(props) {
    const deckButtonStyles = 'border border-black border-2 p-2 rounded-xl font-bold text-white bg-black';
    return (
        <button onClick={props.onChangeDeck} value={props.deck} className={deckButtonStyles}>{props.buttonText}</button>
    )
}

export default DeckMenuButton;