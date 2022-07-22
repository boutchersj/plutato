import React, { useState } from 'react';

function Flashcard(props) {
    const [side,setSide] = useState(true)
    const flipCard = () => {
        setSide(!side);
    }

    return (
        <div className="flex justify-center items-center p-16 text-xl border border-black w-48 h-48" onClick={flipCard}>
            <p>{side ? props.nameSide : props.codeSide}</p>
        </div>
    )
}

export default Flashcard;