import React from 'react';
import Flashcards from './Flashcards';

function GridView(props) {
    return (
        <section className="flex justify-center items-center w-full h-full p-10 bg-emerald-400">
            <Flashcards deck={props.deck} />
        </section>
    )
}

export default GridView;