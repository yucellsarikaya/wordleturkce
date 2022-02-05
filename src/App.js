import { useEffect, useState } from 'react';
import './App.css';
import GameScreen from './GameScreen';
import ModalPopup from './ModalPopup';
import { MainContext } from './context'
import GameKeyboard from './GameKeyboard';
import WorldScreen from './WorldScreen';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [gameWorld1, setGameWorld1] = useState([])
  const [gameWorld2, setGameWorld2] = useState([])
  const [gameWorld3, setGameWorld3] = useState([])
  const [gameWorld4, setGameWorld4] = useState([])
  const [gameWorld5, setGameWorld5] = useState([])
  const [gameWorld6, setGameWorld6] = useState([])

  const [gameWorldColor1, setGameWorldColor1] = useState([{none : false}, {none : false}, {none : false}, {none : false}, {none : false}])
  const [gameWorldColor2, setGameWorldColor2] = useState([{none : false}, {none : false}, {none : false}, {none : false}, {none : false}])
  const [gameWorldColor3, setGameWorldColor3] = useState([{none : false}, {none : false}, {none : false}, {none : false}, {none : false}])
  const [gameWorldColor4, setGameWorldColor4] = useState([{none : false}, {none : false}, {none : false}, {none : false}, {none : false}])
  const [gameWorldColor5, setGameWorldColor5] = useState([{none : false}, {none : false}, {none : false}, {none : false}, {none : false}])
  const [gameWorldColor6, setGameWorldColor6] = useState([{none : false}, {none : false}, {none : false}, {none : false}, {none : false}])

  const data = {
    modalIsOpen,
    setIsOpen,
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
  }

  return (
    <MainContext.Provider value={data}>
      <div className='contentModal'>
        <GameScreen />
        <WorldScreen />
        <GameKeyboard />
        <ModalPopup />
      </div>
    </MainContext.Provider>
  );
}

export default App;