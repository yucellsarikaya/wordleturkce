import React, { useEffect, useState } from 'react';
import { MainContext, useContext } from "./context"

function WorldScreen() {
    const {
        count,
        gameWorld1,
        setGameWorld1,
        gameWorld2,
        setGameWorld2,
        gameWorld3,
        setGameWorld3,
        gameWorld4,
        setGameWorld4,
        gameWorld5,
        setGameWorld5,
        gameWorld6,
        setGameWorld,

        gameWorldColor1,
        gameWorldColor2,
        gameWorldColor3,
        gameWorldColor4,
        gameWorldColor5,
        gameWorldColor6
    } = useContext(MainContext)


    return (
        <div>
            <br />
            <div className='boardContent'>
                <div className='board'>
                    <div className='row'>
                        <div className='wordlBox' style={gameWorldColor1[0].none ? { backgroundColor: gameWorldColor1[0].backgroundColor, color: gameWorldColor1[0].color } : { backgroundColor: 'white' }}>{gameWorld1[0]}</div>
                        <div className='wordlBox' style={gameWorldColor1[1].none ? { backgroundColor: gameWorldColor1[1].backgroundColor, color: gameWorldColor1[1].color } : { backgroundColor: 'white' }}>{gameWorld1[1]}</div>
                        <div className='wordlBox' style={gameWorldColor1[2].none ? { backgroundColor: gameWorldColor1[2].backgroundColor, color: gameWorldColor1[2].color } : { backgroundColor: 'white' }}>{gameWorld1[2]}</div>
                        <div className='wordlBox' style={gameWorldColor1[3].none ? { backgroundColor: gameWorldColor1[3].backgroundColor, color: gameWorldColor1[3].color } : { backgroundColor: 'white' }}>{gameWorld1[3]}</div>
                        <div className='wordlBox' style={gameWorldColor1[4].none ? { backgroundColor: gameWorldColor1[4].backgroundColor, color: gameWorldColor1[4].color } : { backgroundColor: 'white' }}>{gameWorld1[4]}</div>
                    </div>
                    <div className='row'>
                        <div className='wordlBox' style={gameWorldColor2[0].none ? { backgroundColor: gameWorldColor2[0].backgroundColor, color: gameWorldColor2[0].color } : { backgroundColor: 'white' }}>{gameWorld2[0]}</div>
                        <div className='wordlBox' style={gameWorldColor2[1].none ? { backgroundColor: gameWorldColor2[1].backgroundColor, color: gameWorldColor2[1].color } : { backgroundColor: 'white' }}>{gameWorld2[1]}</div>
                        <div className='wordlBox' style={gameWorldColor2[2].none ? { backgroundColor: gameWorldColor2[2].backgroundColor, color: gameWorldColor2[2].color } : { backgroundColor: 'white' }}>{gameWorld2[2]}</div>
                        <div className='wordlBox' style={gameWorldColor2[3].none ? { backgroundColor: gameWorldColor2[3].backgroundColor, color: gameWorldColor2[3].color } : { backgroundColor: 'white' }}>{gameWorld2[3]}</div>
                        <div className='wordlBox' style={gameWorldColor2[4].none ? { backgroundColor: gameWorldColor2[4].backgroundColor, color: gameWorldColor2[4].color } : { backgroundColor: 'white' }}>{gameWorld2[4]}</div>
                    </div>
                    <div className='row'>
                        <div className='wordlBox' style={gameWorldColor3[0].none ? { backgroundColor: gameWorldColor3[0].backgroundColor, color: gameWorldColor3[0].color } : { backgroundColor: 'white' }}>{gameWorld3[0]}</div>
                        <div className='wordlBox' style={gameWorldColor3[1].none ? { backgroundColor: gameWorldColor3[1].backgroundColor, color: gameWorldColor3[1].color } : { backgroundColor: 'white' }}>{gameWorld3[1]}</div>
                        <div className='wordlBox' style={gameWorldColor3[2].none ? { backgroundColor: gameWorldColor3[2].backgroundColor, color: gameWorldColor3[2].color } : { backgroundColor: 'white' }}>{gameWorld3[2]}</div>
                        <div className='wordlBox' style={gameWorldColor3[3].none ? { backgroundColor: gameWorldColor3[3].backgroundColor, color: gameWorldColor3[3].color } : { backgroundColor: 'white' }}>{gameWorld3[3]}</div>
                        <div className='wordlBox' style={gameWorldColor3[4].none ? { backgroundColor: gameWorldColor3[4].backgroundColor, color: gameWorldColor3[4].color } : { backgroundColor: 'white' }}>{gameWorld3[4]}</div>
                    </div>
                    <div className='row'>
                        <div className='wordlBox' style={gameWorldColor4[0].none ? { backgroundColor: gameWorldColor4[0].backgroundColor, color: gameWorldColor4[0].color } : { backgroundColor: 'white' }}>{gameWorld4[0]}</div>
                        <div className='wordlBox' style={gameWorldColor4[1].none ? { backgroundColor: gameWorldColor4[1].backgroundColor, color: gameWorldColor4[1].color } : { backgroundColor: 'white' }}>{gameWorld4[1]}</div>
                        <div className='wordlBox' style={gameWorldColor4[2].none ? { backgroundColor: gameWorldColor4[2].backgroundColor, color: gameWorldColor4[2].color } : { backgroundColor: 'white' }}>{gameWorld4[2]}</div>
                        <div className='wordlBox' style={gameWorldColor4[3].none ? { backgroundColor: gameWorldColor4[3].backgroundColor, color: gameWorldColor4[3].color } : { backgroundColor: 'white' }}>{gameWorld4[3]}</div>
                        <div className='wordlBox' style={gameWorldColor4[4].none ? { backgroundColor: gameWorldColor4[4].backgroundColor, color: gameWorldColor4[4].color } : { backgroundColor: 'white' }}>{gameWorld4[4]}</div>
                    </div>
                    <div className='row'>
                        <div className='wordlBox' style={gameWorldColor5[0].none ? { backgroundColor: gameWorldColor5[0].backgroundColor, color: gameWorldColor5[0].color } : { backgroundColor: 'white' }}>{gameWorld5[0]}</div>
                        <div className='wordlBox' style={gameWorldColor5[1].none ? { backgroundColor: gameWorldColor5[1].backgroundColor, color: gameWorldColor5[1].color } : { backgroundColor: 'white' }}>{gameWorld5[1]}</div>
                        <div className='wordlBox' style={gameWorldColor5[2].none ? { backgroundColor: gameWorldColor5[2].backgroundColor, color: gameWorldColor5[2].color } : { backgroundColor: 'white' }}>{gameWorld5[2]}</div>
                        <div className='wordlBox' style={gameWorldColor5[3].none ? { backgroundColor: gameWorldColor5[3].backgroundColor, color: gameWorldColor5[3].color } : { backgroundColor: 'white' }}>{gameWorld5[3]}</div>
                        <div className='wordlBox' style={gameWorldColor5[4].none ? { backgroundColor: gameWorldColor5[4].backgroundColor, color: gameWorldColor5[4].color } : { backgroundColor: 'white' }}>{gameWorld5[4]}</div>
                    </div>
                    <div className='row'>
                        <div className='wordlBox' style={gameWorldColor6[0].none ? { backgroundColor: gameWorldColor6[0].backgroundColor, color: gameWorldColor6[0].color } : { backgroundColor: 'white' }}>{gameWorld6[0]}</div>
                        <div className='wordlBox' style={gameWorldColor6[1].none ? { backgroundColor: gameWorldColor6[1].backgroundColor, color: gameWorldColor6[1].color } : { backgroundColor: 'white' }}>{gameWorld6[1]}</div>
                        <div className='wordlBox' style={gameWorldColor6[2].none ? { backgroundColor: gameWorldColor6[2].backgroundColor, color: gameWorldColor6[2].color } : { backgroundColor: 'white' }}>{gameWorld6[2]}</div>
                        <div className='wordlBox' style={gameWorldColor6[3].none ? { backgroundColor: gameWorldColor6[3].backgroundColor, color: gameWorldColor6[3].color } : { backgroundColor: 'white' }}>{gameWorld6[3]}</div>
                        <div className='wordlBox' style={gameWorldColor6[4].none ? { backgroundColor: gameWorldColor6[4].backgroundColor, color: gameWorldColor6[4].color } : { backgroundColor: 'white' }}>{gameWorld6[4]}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorldScreen;
