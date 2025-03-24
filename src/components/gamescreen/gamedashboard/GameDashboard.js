import { useEffect, useState, useRef } from 'react';
import './GameDashboard.css'
import Dashboard from '../dashboard/Dashboard';
import ralphHitSound from '../../../assets/audio/ralph_hit.mp3'


function GameDashboard({ onGameOver }) {

    const [ralphPosition, setRalphPosition] = useState(null);
    const [lives, setLives] = useState(3);
    const [score, setScore] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [finalGameScore, setFinalGameScore] = useState(0);

    const scoreRef = useRef(score);
    const hitAudioRef =  useRef(new Audio(ralphHitSound));


    useEffect(() => {
        const boxes = document.querySelectorAll('.box');
        const randomIndex = Math.floor(Math.random() * boxes.length);
        setRalphPosition(randomIndex);
        

        const timer = setInterval(() => {
            const newRandomIndex = Math.floor(Math.random() * boxes.length);
            setRalphPosition(newRandomIndex);
        }, 1000);

        const timeCheck = setInterval(() => {
          setTimeRemaining((prevTime) => {
            if(prevTime <= 0) {
              clearInterval(timer);
              clearInterval(timeCheck);
              console.log(scoreRef.current);
              onGameOver('O tempo acabou!', scoreRef.current);

              return 0;
            }

            return prevTime - 1;
          });
        }, 1000);

        return () => {
          clearInterval(timer);
          clearInterval(timeCheck);
        };

    }, []);

    const handleBoxClick = (index) => {

        if(index === ralphPosition){
            setLives((prevLives) => prevLives + 1);
            setScore((prevScore) => {
              scoreRef.current = prevScore + 1

              return prevScore + 1;
            });
            setFinalGameScore(scoreRef.current);

            hitAudioRef.current.currentTime = 0;
            hitAudioRef.current.play().catch(error => {
              console.error("Erro ao reproduzir áudio de acerto:", error);
            })
            
        }else {
            setLives((prevLives) => {
              if(prevLives <= 1){
                setFinalGameScore(scoreRef.current);
                onGameOver('Suas vidas acabaram!', scoreRef.current)

                return 0;
              }
              return prevLives - 1;
            });
        }
    };

    return(

      <div>
        <Dashboard lives={lives} score={score} />
          <div className='area-game' style={{display: lives > 0 && timeRemaining > 0 ? 'flex' : 'none'}}>
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