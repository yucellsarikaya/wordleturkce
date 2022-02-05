import { useState, useEffect } from 'react';
import { MainContext, useContext } from "./context"
import words from "./words.json"
import alertify from "alertifyjs"

function GameKeyboard() {
    let [count, setCount] = useState([0])
    let [syc, setSyc] = useState([1])
    let tahmin = ""
    let [world, setWorld] = useState([])
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
        setGameWorld6,

        gameWorldColor1,
        setGameWorldColor1,
        gameWorldColor2,
        setGameWorldColor2,
        gameWorldColor3,
        setGameWorldColor3,
        gameWorldColor4,
        setGameWorldColor4,
        gameWorldColor5,
        setGameWorldColor5,
        gameWorldColor6,
        setGameWorldColor6,
    } = useContext(MainContext)

    useEffect(() => {
        var random = Math.floor(Math.random() * 10131);
        world[0] = words[random]
        console.log(world)
    }, []);

    const keyWorldle = (e) => {
        if (syc == 1 && count[0] < 5 && count[0] >= 0) {
            setGameWorld1(gameWorld1 => [...gameWorld1, e]);
            count[0] = count[0] + 1
        } else if (syc == 2 && count[0] < 10 && count[0] >= 5) {
            setGameWorld2(gameWorld2 => [...gameWorld2, e]);
            count[0] = count[0] + 1
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
        if (count[0] % 5 == 0 && count[0] > 0) {
            if (syc == 1) {
                for (var i = 0; i < gameWorld1.length; i++) {
                    tahmin += gameWorld1[i]
                }
            } else if (syc == 2) {
                for (var i = 0; i < gameWorld2.length; i++) {
                    tahmin += gameWorld2[i]
                }
            } else if (syc == 3) {
                for (var i = 0; i < gameWorld3.length; i++) {
                    tahmin += gameWorld3[i]
                }
            } else if (syc == 4) {
                for (var i = 0; i < gameWorld4.length; i++) {
                    tahmin += gameWorld4[i]
                }
            } else if (syc == 5) {
                for (var i = 0; i < gameWorld5.length; i++) {
                    tahmin += gameWorld5[i]
                }
            } else if (syc == 6) {
                for (var i = 0; i < gameWorld6.length; i++) {
                    tahmin += gameWorld6[i]
                }
            }
            wordSearch(tahmin)
            tahmin = ""
        } else {
            alertify.error("Yetersiz harf", 1.5)
        }
    }

    const wordSearch = (kelime) => {
        var durum = words.find(key => key === kelime.toLocaleLowerCase())
        if (durum) {
            if (kelime.toLowerCase() === world[0]) {
                alertify.success("Kelimeyi buldunuz, tebrikler", 1.5)
                if (syc[0] == 1) {
                    setGameWorldColor1([])
                    for (var i = 0; i < 5; i++) {
                        setGameWorldColor1(gameWorldColor1 => [...gameWorldColor1, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                    }
                    syc[0] = syc[0] + 1
                } else if (syc[0] == 2) {
                    setGameWorldColor2([])
                    for (var i = 0; i < 5; i++) {
                        setGameWorldColor2(gameWorldColor2 => [...gameWorldColor2, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                    }
                } else if (syc[0] == 3) {
                    setGameWorldColor3([])
                    for (var i = 0; i < 5; i++) {
                        setGameWorldColor3(gameWorldColor3 => [...gameWorldColor3, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                    }
                } else if (syc[0] == 4) {
                    setGameWorldColor4([])
                    for (var i = 0; i < 5; i++) {
                        setGameWorldColor4(gameWorldColor4 => [...gameWorldColor4, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                    }
                } else if (syc[0] == 5) {
                    setGameWorldColor5([])
                    for (var i = 0; i < 5; i++) {
                        setGameWorldColor5(gameWorldColor5 => [...gameWorldColor5, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                    }
                } else if (syc[0] == 6) {
                    setGameWorldColor6([])
                    for (var i = 0; i < 5; i++) {
                        setGameWorldColor6(gameWorldColor6 => [...gameWorldColor6, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                    }
                }
                syc[0] = syc[0] + 100
            }
            else {
                if (syc[0] == 1) {
                    alertify.error("Bilemediniz, yeni kelime giriniz", 1.5)
                    setGameWorldColor1([])
                    for (var i = 0; i < 5; i++) {
                        var harf = world[0].slice(i, i + 1)
                        if (gameWorld1[i].toLowerCase() == harf) {
                            setGameWorldColor1(gameWorldColor1 => [...gameWorldColor1, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                        } else {
                            var not = 0;
                            for (var j = 0; j < 5; j++) {
                                var harf = world[0].slice(j, j + 1)
                                if (gameWorld1[i].toLowerCase() == harf) {
                                    setGameWorldColor1(gameWorldColor1 => [...gameWorldColor1, { none: true, backgroundColor: '#c9b458', color: 'white' }]);
                                    break;
                                }
                                not++;
                            }
                            if (not == 5) {
                                setGameWorldColor1(gameWorldColor1 => [...gameWorldColor1, { none: true, backgroundColor: '#787c7e', color: 'white' }]);
                            }
                        }
                    }
                    alertify.error("Anlamlı kelime giriniz", 1.5)
                } else if (syc[0] == 2) {
                    alertify.error("Bilemediniz, yeni kelime giriniz", 1.5)
                    setGameWorldColor2([])
                    for (var i = 0; i < 5; i++) {
                        var harf = world[0].slice(i, i + 1)
                        if (gameWorld2[i].toLowerCase() == harf) {
                            setGameWorldColor2(gameWorldColor2 => [...gameWorldColor2, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                        } else {
                            var not = 0;
                            for (var j = 0; j < 5; j++) {
                                var harf = world[0].slice(j, j + 1)
                                if (gameWorld2[i].toLowerCase() == harf) {
                                    setGameWorldColor2(gameWorldColor2 => [...gameWorldColor2, { none: true, backgroundColor: '#c9b458', color: 'white' }]);
                                    break;
                                }
                                not++;
                            }
                            if (not == 5) {
                                setGameWorldColor2(gameWorldColor2 => [...gameWorldColor2, { none: true, backgroundColor: '#787c7e', color: 'white' }]);
                            }
                        }
                    }
                } else if (syc[0] == 3) {
                    alertify.error("Bilemediniz, yeni kelime giriniz", 1.5)
                    setGameWorldColor3([])
                    for (var i = 0; i < 5; i++) {
                        var harf = world[0].slice(i, i + 1)
                        if (gameWorld2[i].toLowerCase() == harf) {
                            setGameWorldColor3(gameWorldColor3 => [...gameWorldColor3, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                        } else {
                            var not = 0;
                            for (var j = 0; j < 5; j++) {
                                var harf = world[0].slice(j, j + 1)
                                if (gameWorld3[i].toLowerCase() == harf) {
                                    setGameWorldColor3(gameWorldColor3 => [...gameWorldColor3, { none: true, backgroundColor: '#c9b458', color: 'white' }]);
                                    break;
                                }
                                not++;
                            }
                            if (not == 5) {
                                setGameWorldColor3(gameWorldColor3 => [...gameWorldColor3, { none: true, backgroundColor: '#787c7e', color: 'white' }]);
                            }
                        }
                    }
                } else if (syc[0] == 4) {
                    alertify.error("Bilemediniz, yeni kelime giriniz", 1.5)
                    setGameWorldColor4([])
                    for (var i = 0; i < 5; i++) {
                        var harf = world[0].slice(i, i + 1)
                        if (gameWorld4[i].toLowerCase() == harf) {
                            setGameWorldColor4(gameWorldColor4 => [...gameWorldColor4, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                        } else {
                            var not = 0;
                            for (var j = 0; j < 5; j++) {
                                var harf = world[0].slice(j, j + 1)
                                if (gameWorld4[i].toLowerCase() == harf) {
                                    setGameWorldColor4(gameWorldColor4 => [...gameWorldColor4, { none: true, backgroundColor: '#c9b458', color: 'white' }]);
                                    break;
                                }
                                not++;
                            }
                            if (not == 5) {
                                setGameWorldColor4(gameWorldColor4 => [...gameWorldColor4, { none: true, backgroundColor: '#787c7e', color: 'white' }]);
                            }
                        }
                    }
                } else if (syc[0] == 5) {
                    alertify.error("Bilemediniz, yeni kelime giriniz", 1.5)
                    setGameWorldColor5([])
                    for (var i = 0; i < 5; i++) {
                        var harf = world[0].slice(i, i + 1)
                        if (gameWorld5[i].toLowerCase() == harf) {
                            setGameWorldColor5(gameWorldColor5 => [...gameWorldColor5, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                        } else {
                            var not = 0;
                            for (var j = 0; j < 5; j++) {
                                var harf = world[0].slice(j, j + 1)
                                if (gameWorld5[i].toLowerCase() == harf) {
                                    setGameWorldColor5(gameWorldColor5 => [...gameWorldColor5, { none: true, backgroundColor: '#c9b458', color: 'white' }]);
                                    break;
                                }
                                not++;
                            }
                            if (not == 5) {
                                setGameWorldColor5(gameWorldColor5 => [...gameWorldColor5, { none: true, backgroundColor: '#787c7e', color: 'white' }]);
                            }
                        }
                    }
                } else if (syc[0] == 6) {
                    alertify.error("Bilemediniz, yeni kelime giriniz", 1.5)
                    for (var i = 0; i < 5; i++) {
                        setGameWorldColor6([])
                        var harf = world[0].slice(i, i + 1)
                        if (gameWorld6[i].toLowerCase() == harf) {
                            setGameWorldColor6(gameWorldColor6 => [...gameWorldColor6, { none: true, backgroundColor: '#6aaa64', color: 'white' }]);
                        } else {
                            var not = 0;
                            for (var j = 0; j < 5; j++) {
                                var harf = world[0].slice(j, j + 1)
                                if (gameWorld6[i].toLowerCase() == harf) {
                                    setGameWorldColor6(gameWorldColor6 => [...gameWorldColor6, { none: true, backgroundColor: '#c9b458', color: 'white' }]);
                                    break;
                                }
                                not++;
                            }
                            if (not == 5) {
                                setGameWorldColor6(gameWorldColor6 => [...gameWorldColor6, { none: true, backgroundColor: '#787c7e', color: 'white' }]);
                            }
                        }
                    }
                }
            }
            syc[0] = syc[0] + 1
        } else {
            alertify.error("Anlamlı kelime giriniz", 1.5)
        }
    }

    const del = () => {
        if (syc == 1 && count[0] < 6 && count[0] > 0) {
            var lenght = gameWorld1.length
            var array = gameWorld1
            array.splice(lenght - 1, 1)
            setGameWorld1(gameWorld1 => [...array]);
            count[0] = count[0] - 1
        } else if (syc == 2 && count[0] < 11 && count[0] > 5) {
            var lenght = gameWorld2.length
            var array = gameWorld2
            array.splice(lenght - 1, 1)
            setGameWorld2(gameWorld2 => [...array]);
            count[0] = count[0] - 1
        } else if (syc == 3 && count[0] < 16 && count[0] > 10) {
            var lenght = gameWorld3.length
            var array = gameWorld3
            array.splice(lenght - 1, 1)
            setGameWorld3(gameWorld3 => [...array]);
            count[0] = count[0] - 1
        } else if (syc == 4 && count[0] < 21 && count[0] > 15) {
            var lenght = gameWorld4.length
            var array = gameWorld4
            array.splice(lenght - 1, 1)
            setGameWorld4(gameWorld4 => [...array]);
            count[0] = count[0] - 1
        } else if (syc == 5 && count[0] < 26 && count[0] > 20) {
            var lenght = gameWorld5.length
            var array = gameWorld5
            array.splice(lenght - 1, 1)
            setGameWorld5(gameWorld5 => [...array]);
            count[0] = count[0] - 1
        } else if (syc == 6 && count[0] < 31 && count[0] > 25) {
            var lenght = gameWorld6.length
            var array = gameWorld6
            array.splice(lenght - 1, 1)
            setGameWorld6(gameWorld6 => [...array]);
            count[0] = count[0] - 1
        }

    }

    return (
        <div>
            <div>
                <div className='keyboard'>
                    <div className='rowKeyboard'>
                        <button onClick={() => keyWorldle("e")} className='worldleBtn'>E</button>
                        <button onClick={() => keyWorldle("r")} className='worldleBtn'>R</button>
                        <button onClick={() => keyWorldle("t")} className='worldleBtn'>T</button>
                        <button onClick={() => keyWorldle("y")} className='worldleBtn'>Y</button>
                        <button onClick={() => keyWorldle("u")} className='worldleBtn'>U</button>
                        <button onClick={() => keyWorldle("ı")} className='worldleBtn'>I</button>
                        <button onClick={() => keyWorldle("o")} className='worldleBtn'>O</button>
                        <button onClick={() => keyWorldle("p")} className='worldleBtn'>P</button>
                        <button onClick={() => keyWorldle("ğ")} className='worldleBtn'>Ğ</button>
                        <button onClick={() => keyWorldle("ü")} className='worldleBtn'>Ü</button>
                    </div>
                    <div className='rowKeyboard'>
                        <div className='spacer half'></div>
                        <button onClick={() => keyWorldle("a")} className='worldleBtn'>A</button>
                        <button onClick={() => keyWorldle("s")} className='worldleBtn'>S</button>
                        <button onClick={() => keyWorldle("d")} className='worldleBtn'>D</button>
                        <button onClick={() => keyWorldle("f")} className='worldleBtn'>F</button>
                        <button onClick={() => keyWorldle("g")} className='worldleBtn'>G</button>
                        <button onClick={() => keyWorldle("h")} className='worldleBtn'>H</button>
                        <button onClick={() => keyWorldle("j")} className='worldleBtn'>J</button>
                        <button onClick={() => keyWorldle("k")} className='worldleBtn'>K</button>
                        <button onClick={() => keyWorldle("l")} className='worldleBtn'>L</button>
                        <button onClick={() => keyWorldle("ş")} className='worldleBtn'>Ş</button>
                        <button onClick={() => keyWorldle("İ")} className='worldleBtn'>İ</button>
                        <div className='spacer half'></div>
                    </div>
                    <div className='rowKeyboard'>
                        <button onClick={() => enter()} className="one-and-a-half">Enter</button>
                        <button onClick={() => keyWorldle("z")} className='worldleBtn'>Z</button>
                        <button onClick={() => keyWorldle("c")} className='worldleBtn'>C</button>
                        <button onClick={() => keyWorldle("v")} className='worldleBtn'>V</button>
                        <button onClick={() => keyWorldle("b")} className='worldleBtn'>B</button>
                        <button onClick={() => keyWorldle("n")} className='worldleBtn'>N</button>
                        <button onClick={() => keyWorldle("m")} className='worldleBtn'>M</button>
                        <button onClick={() => keyWorldle("ö")} className='worldleBtn'>Ö</button>
                        <button onClick={() => keyWorldle("ç")} className='worldleBtn'>Ç</button>
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