import React from 'react';
import DeckMenuButton from './DeckMenuButton';
import * as plutils from './plutils';

function DeckMenuButtons(props) {
    const deckButtonContainerStyles = 'grid md:grid-cols-4 grid-cols-3 gap-1 w-full justify-evenly bg-orange-300 p-5';
    const pluDecks = Object.keys(plutils).filter(val => val !== 'deckDataCurator');
    const deckButtonsData = pluDecks.map(deck => {
        const deckStr = deck.slice(1);
        const menuButton = {
            id: deck,
            name: deck.charAt(0).toUpperCase() + deckStr.replace(/([A-Z])/g, " $1")
        }

        return menuButton
    })
    const deckButtons = deckButtonsData.map(deck => {
        return (
            <DeckMenuButton
                key={deck.id}
                onChangeDeck={props.onChangeDeck}
                deck={deck.id}
                buttonText={deck.name}
            />
        )
    })
    return (
        <section className={deckButtonContainerStyles}>
            {deckButtons}
        </section>
    )
}

export default DeckMenuButtons;