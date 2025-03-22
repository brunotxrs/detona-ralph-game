import React, { useContext } from 'react';
import { NameContext } from '../namecontext/NameContext';

import './GameScreen.css';


function GameScreen() {
  const { playerName } = useContext(NameContext);

  return (
    <div>
      <h1>Welcome, {playerName}!</h1>
    </div>
  );
}

export default GameScreen;