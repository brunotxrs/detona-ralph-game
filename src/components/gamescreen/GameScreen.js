import React, { useContext } from 'react';
import { NameContext } from '../namecontext/NameContext';

import './GameScreen.css';


function GameScreen() {
  const { playerName } = useContext(NameContext);

  return (
    <div className='gamescreen'>
      <h1 className='title'>Welcome, {playerName}!</h1>
    </div>
  );
}

export default GameScreen;