import React, { useState } from 'react';

function Flashcard() {
    const [side,setSide] = useState(true)
    const flipCard = () => {
        setSide(!side);
    }
    const front = 'Banana'
    const back = 4011
    return (
        <div className="flex justify-center items-center p-16 text-xl border border-black w-[25%] h-[25%]" onClick={flipCard}>
            <p>{side ? front : back}</p>
        </div>
    )
}

export default Flashcard;