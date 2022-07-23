import React from 'react';

function Flashcards(props) {
    return (
        <div className='p-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
            {props.deck}
        </div>
    )
}

export default Flashcards;