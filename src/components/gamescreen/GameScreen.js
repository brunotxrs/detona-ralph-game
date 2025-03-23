import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GameScreen.css';
import GameDashboard from './gamedashboard/GameDashboard';
import theEnd from '../../assets/imgs/mobile/the-end.png'
import { ScoreContext, ScoreProvider } from '../../components/scorecontext/ScoreContext'

function GameScreen(){

  const navigate = useNavigate();
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const { setFinalScore } = useContext(ScoreContext);

  const handleGameOver = (message, score) => {
    setGameOver(true);
    setMessage(message);
    setFinalScore(score);

    setTimeout(() => {
      navigate('/scoreboard');
    }, 2000);

  };

  return (
    <div className='gamescreen'>
      <ScoreProvider>
      <GameDashboard onGameOver={handleGameOver} />
      </ScoreProvider>
      
      {gameOver && (
        <div className='the-end' style={{display: gameOver ? 'flex' : 'none'}}>
          <div className='gameover'>
            <span className='paragraph'>{message}</span>
            <img className='img' src={theEnd} alt='imagem do Detona Ralph'></img>
          </div>
        </div>
      )}

    </div>
  );
}

export default GameScreen;