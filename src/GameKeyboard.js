import { useState } from 'react';
import { MainContext, useContext } from "./context"

function GameKeyboard() {
    let [count, setCount] = useState([0])
    let [syc, setSyc] = useState([1])
    const {
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
        setGameWorld6
    } = useContext(MainContext)

    const keyWorldle = (e) => {
        if (syc == 1 && count[0] < 5 && count[0] >= 0) {
            setGameWorld1(gameWorld1 => [...gameWorld1, e]);
            count[0] = count[0] + 1
            console.log(count, gameWorld1)
        } else if (syc == 2 && count[0] < 10 && count[0] >= 5) {
            setGameWorld2(gameWorld2 => [...gameWorld2, e]);
            count[0] = count[0] + 1
            console.log(count)
        } else if (syc == 3 && count[0] < 15 && count[0] >= 10) {
            setGameWorld3(gameWorld3 => [...gameWorld3, e]);
            count[0] = count[0] + 1
        } else if (syc == 4 && count[0] < 20 && count[0] >= 15) {
            setGameWorld4(gameWorld4 => [...gameWorld4, e]);
            count[0] = count[0] + 1
        } else if (syc == 5 && count[0] < 25 && count[0] >= 20) {
            setGameWorld5(gameWorld5 => [...gameWorld5, e]);
            count[0] = count[0] + 1
        } else if (syc == 6 && count[0] < 30 && count[0] >= 25) {
            setGameWorld6(gameWorld6 => [...gameWorld6, e]);
            count[0] = count[0] + 1
        }

    }

    const enter = () => {
        if (count[0] % 5 == 0) {
            syc[0] = syc[0] + 1
        } else {
            console.log("yetersiz harf")
        }
    }

    const del = () => {
        if (syc == 1 && count[0] < 6 && count[0] >= 0) {
            var lenght = gameWorld1.length
            var array = gameWorld1
            array.splice(lenght - 1, 1)
            setGameWorld1(gameWorld1 => [...array]);
            count[0] = count[0] - 1
        } else if (syc == 2 && count[0] < 11 && count[0] >= 5) {
            var lenght = gameWorld2.length
            var array = gameWorld2
            array.splice(lenght - 1, 1)
            setGameWorld2(gameWorld2 => [...array]);
            count[0] = count[0] - 1
        } else if (syc == 3 && count[0] < 16 && count[0] >= 10) {
            var lenght = gameWorld3.length
             var array = gameWorld3
             array.splice(lenght-1,1)
             setGameWorld3(gameWorld3 => [...array]);
             count[0] = count[0] - 1
        } else if (syc == 4 && count[0] < 21 && count[0] >= 15) {
            var lenght = gameWorld4.length
             var array = gameWorld4
             array.splice(lenght-1,1)
             setGameWorld4(gameWorld4 => [...array]);
             count[0] = count[0] - 1
        } else if (syc == 5 && count[0] < 26 && count[0] >= 20) {
            var lenght = gameWorld5.length
             var array = gameWorld5
             array.splice(lenght-1,1)
             setGameWorld5(gameWorld5 => [...array]);
             count[0] = count[0] - 1
        } else if (syc == 6 && count[0] < 31 && count[0] >= 25) {
            var lenght = gameWorld6.length
             var array = gameWorld6
             array.splice(lenght-1,1)
             setGameWorld6(gameWorld6 => [...array]);
             count[0] = count[0] - 1
        }

    }

    return (
        <div>
            <div>
                <div className='keyboard'>
                    <div className='rowKeyboard'>
                        <button onClick={() => keyWorldle("E")} className='worldleBtn'>E</button>
                        <button onClick={() => keyWorldle("R")} className='worldleBtn'>R</button>
                        <button onClick={() => keyWorldle("T")} className='worldleBtn'>T</button>
                        <button onClick={() => keyWorldle("Y")} className='worldleBtn'>Y</button>
                        <button onClick={() => keyWorldle("U")} className='worldleBtn'>U</button>
                        <button onClick={() => keyWorldle("I")} className='worldleBtn'>I</button>
                        <button onClick={() => keyWorldle("O")} className='worldleBtn'>O</button>
                        <button onClick={() => keyWorldle("P")} className='worldleBtn'>P</button>
                        <button onClick={() => keyWorldle("Ğ")} className='worldleBtn'>Ğ</button>
                        <button onClick={() => keyWorldle("Ü")} className='worldleBtn'>Ü</button>
                    </div>
                    <div className='rowKeyboard'>
                        <div className='spacer half'></div>
                        <button onClick={() => keyWorldle("A")} className='worldleBtn'>A</button>
                        <button onClick={() => keyWorldle("S")} className='worldleBtn'>S</button>
                        <button onClick={() => keyWorldle("D")} className='worldleBtn'>D</button>
                        <button onClick={() => keyWorldle("F")} className='worldleBtn'>F</button>
                        <button onClick={() => keyWorldle("G")} className='worldleBtn'>G</button>
                        <button onClick={() => keyWorldle("H")} className='worldleBtn'>H</button>
                        <button onClick={() => keyWorldle("J")} className='worldleBtn'>J</button>
                        <button onClick={() => keyWorldle("K")} className='worldleBtn'>K</button>
                        <button onClick={() => keyWorldle("L")} className='worldleBtn'>L</button>
                        <button onClick={() => keyWorldle("Ş")} className='worldleBtn'>Ş</button>
                        <button onClick={() => keyWorldle("İ")} className='worldleBtn'>İ</button>
                        <div className='spacer half'></div>
                    </div>
                    <div className='rowKeyboard'>
                        <button onClick={() => enter()} className="one-and-a-half">Enter</button>
                        <button onClick={() => keyWorldle("Z")} className='worldleBtn'>Z</button>
                        <button onClick={() => keyWorldle("C")} className='worldleBtn'>C</button>
                        <button onClick={() => keyWorldle("V")} className='worldleBtn'>V</button>
                        <button onClick={() => keyWorldle("B")} className='worldleBtn'>B</button>
                        <button onClick={() => keyWorldle("N")} className='worldleBtn'>N</button>
                        <button onClick={() => keyWorldle("M")} className='worldleBtn'>M</button>
                        <button onClick={() => keyWorldle("Ö")} className='worldleBtn'>Ö</button>
                        <button onClick={() => keyWorldle("Ç")} className='worldleBtn'>Ç</button>
                        <button onClick={() => del()} className="one-and-a-half">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameKeyboard;
