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
        setGameWorld
    } = useContext(MainContext)

    return (
        <div>
            <br />
            <div className='boardContent'>
                <div className='board'>
                    <div className='row'>
                        <div className='wordlBox'>{gameWorld1[0]}</div>
                        <div className='wordlBox'>{gameWorld1[1]}</div>
                        <div className='wordlBox'>{gameWorld1[2]}</div>
                        <div className='wordlBox'>{gameWorld1[3]}</div>
                        <div className='wordlBox'>{gameWorld1[4]}</div>
                    </div>
                    <div className='row'>
                        <div className='wordlBox'>{gameWorld2[0]}</div>
                        <div className='wordlBox'>{gameWorld2[1]}</div>
                        <div className='wordlBox'>{gameWorld2[2]}</div>
                        <div className='wordlBox'>{gameWorld2[3]}</div>
                        <div className='wordlBox'>{gameWorld2[4]}</div>
                    </div>
                    <div className='row'>
                        <div className='wordlBox'>{gameWorld3[0]}</div>
                        <div className='wordlBox'>{gameWorld3[1]}</div>
                        <div className='wordlBox'>{gameWorld3[2]}</div>
                        <div className='wordlBox'>{gameWorld3[3]}</div>
                        <div className='wordlBox'>{gameWorld3[4]}</div>
                    </div>
                    <div className='row'>
                        <div className='wordlBox'>{gameWorld4[0]}</div>
                        <div className='wordlBox'>{gameWorld4[1]}</div>
                        <div className='wordlBox'>{gameWorld4[2]}</div>
                        <div className='wordlBox'>{gameWorld4[3]}</div>
                        <div className='wordlBox'>{gameWorld4[4]}</div>
                    </div>
                    <div className='row'>
                        <div className='wordlBox'>{gameWorld5[0]}</div>
                        <div className='wordlBox'>{gameWorld5[1]}</div>
                        <div className='wordlBox'>{gameWorld5[2]}</div>
                        <div className='wordlBox'>{gameWorld5[3]}</div>
                        <div className='wordlBox'>{gameWorld5[4]}</div>
                    </div>
                    <div className='row'>
                        <div className='wordlBox'>{gameWorld6[0]}</div>
                        <div className='wordlBox'>{gameWorld6[1]}</div>
                        <div className='wordlBox'>{gameWorld6[2]}</div>
                        <div className='wordlBox'>{gameWorld6[3]}</div>
                        <div className='wordlBox'>{gameWorld6[4]}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorldScreen;
