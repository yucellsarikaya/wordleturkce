import { useState } from 'react';
import './App.css';
import GameScreen from './GameScreen';
import ModalPopup from './ModalPopup';
import { MainContext } from './context'

function App() {
  const [modalIsOpen, setIsOpen] = useState(true);

  const data = {
    modalIsOpen,
    setIsOpen
  }
  return (
    <div className='contentModal'>
      <MainContext.Provider value={data}>
        <GameScreen />
        <ModalPopup/>
      </MainContext.Provider>
    </div>
  );
}

export default App;