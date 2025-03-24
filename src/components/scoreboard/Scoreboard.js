import React, {useContext, useMemo} from 'react';
import { ScoreContext } from '../scorecontext/ScoreContext';
import { NameContext } from '../namecontext/NameContext';

import './Scoreboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Scoreboard() {
  const { finalScore } = useContext(ScoreContext);
  const { playerName } = useContext(NameContext);
  const navigate = useNavigate()

  const players = useMemo(() => {
    return [
      { name: 'Anya', score: '100' },
      { name: 'Jax', score: '50' },
      { name: playerName, score: finalScore },
    ].sort((a, b) => b.score - a.score);
  },[ playerName, finalScore]);


  return (
    <div className='score-container'>

      <div className='painel'>

        <div className='box-painel'>
          {players.map((player, index) => {
          return (
            <div className='player' key={player.name}>

            <p className='name-player'>{player.name}→</p>
            {index === 0 && (
              <span className='trophy'>
                <span className='box-player-score'>{player.score}</span>
                <FontAwesomeIcon icon={faTrophy} />
              </span>
            )}
            {index === 1 && (
              <span className='medal-bronze'>
                <span className='box-player-score'>{player.score}</span>
                <FontAwesomeIcon icon={faMedal} />
              </span>
            )}
            {index === 2 && (
              <span className='medal-prata'>
                <span className='box-player-score'>{player.score}</span>
                <FontAwesomeIcon icon={faMedal} />
              </span>
            )}
            
          </div>
          );
          })}
          
        </div>
      </div>

      <div className='container-btn'>
        <div className='btn'>
          <button className='btn-box' onClick={() => navigate('/homescreen')}>
            <span className='btn-text'>restart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;