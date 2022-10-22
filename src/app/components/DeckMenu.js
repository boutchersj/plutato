import React from 'react';
import DeckMenuButtons from './DeckMenuButtons';

function DeckMenu(props) {
    const menuHeaderStyles = 'flex w-full bg-black text-white p-2 font-bold justify-center';
    
    return (
        <div>
            <h2 className={menuHeaderStyles}>Choose a Deck</h2>
            <DeckMenuButtons onChangeDeck={props.onChangeDeck} />
        </div>

    )
}

export default DeckMenu;