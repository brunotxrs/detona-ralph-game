import React, {useContext} from 'react';
import { ScoreContext } from '../scorecontext/ScoreContext';


function Scoreboard() {
  const { finalScore } = useContext(ScoreContext)
  console.log(finalScore)
  return (
    <div className='score'>
      <h1>Scoreboard</h1>
      <p>Aqui vai a pontuação:
        {finalScore}
        
      </p>
    </div>
  );
}

export default Scoreboard;