import React from 'react';
import { signInWithGoogle } from './Firebase';

function Card() {
    return (
        <button onClick={signInWithGoogle} className="text-blue-700">I'm a card!</button>
    )
}

export default Card;