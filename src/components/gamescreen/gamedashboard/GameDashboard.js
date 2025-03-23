
import { useEffect, useState } from 'react';
import './GameDashboard.css'
import Dashboard from '../dashboard/Dashboard';


function GameDashboard() {

    const [ralphPosition, setRalphPosition] = useState(null);
    const [lives, setLives] = useState(3);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const boxes = document.querySelectorAll('.box');
        const randomIndex = Math.floor(Math.random() * boxes.length);
        setRalphPosition(randomIndex);

        const timer = setInterval(() => {
            const newRandomIndex = Math.floor(Math.random() * boxes.length);
            setRalphPosition(newRandomIndex);
        }, 1000)

        return () => clearInterval(timer);

    }, []);

    const handleBoxClick = (index) => {

        if(index === ralphPosition){
            setLives( lives +1);
            setScore(score +1);
        }else {
            setLives(lives -1);
        }
    }

    return(

      <div>
        <Dashboard lives={lives} score={score} />
          <div className='area-game'>
            <div className='container'>
              <div className={`box ${ralphPosition === 0 ? 'ralph' : ''}`}
              onClick={() => handleBoxClick(0)}></div>
              <div className={`box ${ralphPosition === 1 ? 'ralph' : ''}`}
              onClick={() => handleBoxClick(1)}></div>
              <div className={`box ${ralphPosition === 2 ? 'ralph' : ''}`}
              onClick={() => handleBoxClick(2)}></div>
            </div>
            <div className='container'>
              <div className={`box ${ralphPosition === 3 ? 'ralph' : ''}`}
              onClick={() => handleBoxClick(3)}></div>
              <div className={`box ${ralphPosition === 4 ? 'ralph' : ''}`}
              onClick={() => handleBoxClick(4)}></div>
              <div className={`box ${ralphPosition === 5 ? 'ralph' : ''}`}
              onClick={() => handleBoxClick(5)}></div>
            </div>
            <div className='container'>
              <div className={`box ${ralphPosition === 6 ? 'ralph' : ''}`}
              onClick={() => handleBoxClick(6)}></div>
              <div className={`box ${ralphPosition === 7 ? 'ralph' : ''}`}
              onClick={() => handleBoxClick(7)}></div>
              <div className={`box ${ralphPosition === 8 ? 'ralph' : ''}`}
              onClick={() => handleBoxClick(8)}></div>
            </div>
          </div>
      </div> 

    );
};

export default GameDashboard;