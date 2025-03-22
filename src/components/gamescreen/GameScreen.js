import React, { useContext, useEffect, useState } from 'react';
import { NameContext } from '../namecontext/NameContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './GameScreen.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';



function GameScreen() {
  const { playerName } = useContext(NameContext);
  const [ timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    if(timeRemaining > 0) {
      const time = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);

      return () => clearInterval(time);
    }
  }, [timeRemaining]);


  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart('0')}:${seconds.toString().padStart(2, '0')}`;
  }


  return (
    <div className='gamescreen'>

      <div className='game-painel'>

        <div className='time'>
        <span className='clock'><FontAwesomeIcon icon={faClock} /></span>
        <span className='clock-n'>{formatTime(timeRemaining)}</span>
        </div>

        <div className='life'>
          <span className='heart'><FontAwesomeIcon icon={faHeart} /></span>
          <span>X <span className='number-heat'>3</span></span>
          
        </div>        
      </div>

      <div className='painel-player'>
      <span>{playerName}</span>
      <span className='score'><FontAwesomeIcon icon={faStar} /></span>
      <span> X <span className='number-score'>0</span></span>

      </div>



    </div>
  );
}

export default GameScreen;