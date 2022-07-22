import React, { useState } from 'react';

function Flashcard(props) {
    const [side,setSide] = useState(true);
    const flipCard = () => {
        setSide(!side);
    };
    const cardColor = side ? 'bg-black text-white' : 'bg-white text-black';

    return (
        <button className={`${cardColor} flex justify-center items-center p-16 text-xl border border-black w-48 h-48`} onClick={flipCard}>
            <p>{side ? props.nameSide : props.codeSide}</p>
        </button>
    );
}

export default Flashcard;