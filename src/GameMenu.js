import React from 'react';

function GameMenu(props) {
    const menuHeaderStyles = 'flex w-full bg-black text-white p-2 font-bold justify-center';
    const gameButtonContainerStyles = 'flex w-full justify-evenly bg-blue-300 p-5';
    const gameButtonStyles = 'border border-white border-2 p-2 rounded-xl font-bold text-black bg-white';

    return (
        <div>
            <h2 className={menuHeaderStyles}>Choose a Game</h2>
            <section className={gameButtonContainerStyles}>
                <button id='grid' onClick={props.onChangeGame} value='grid' className={gameButtonStyles}>Grid</button>
            </section>
        </div>
    )
}

export default GameMenu;