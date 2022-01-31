import React from 'react';
import { MainContext, useContext } from "./context"

function GameScreen() {
    const { modalIsOpen, setIsOpen } = useContext(MainContext)

    const openPopup = () => {
        setIsOpen(!modalIsOpen);
    }
    return (
        <div>
            <div className='header'>
                <div>
                    <button onClick={() => openPopup()} className='helpBtn'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path fill="var(--color-tone-3)" d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                        </svg>
                    </button>
                </div>
                
            </div>
            <div className="titleHeader">
                    <div className='boxTiltle green'>W</div>
                    <div className='boxTiltle green'>O</div>
                    <div className='boxTiltle green'>R</div>
                    <div className='boxTiltle green'>D</div>
                    <div className='boxTiltle green'>L</div>
                    <div className='boxTiltle green'>E</div>
                    <div className='boxTiltle yellow'>T</div>
                    <div className='boxTiltle yellow'>Ü</div>
                    <div className='boxTiltle yellow'>R</div>
                    <div className='boxTiltle yellow'>K</div>
                    <div className='boxTiltle yellow'>Ç</div>
                    <div className='boxTiltle yellow'>E</div>
                </div>
            <hr />
        </div>
    );
}

export default GameScreen;
