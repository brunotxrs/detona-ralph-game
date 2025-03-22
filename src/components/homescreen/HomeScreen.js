import React, { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { NameContext } from '../namecontext/NameContext';

import './HomeScreen.css';


function HomeScreen() {
    const [name, setName] = useState('');
    const navigate = useNavigate(); 
    const [ showAlert, setShowAlert] = useState(false);
    const { setPlayerName } = useContext(NameContext);
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleStartClick = () => {
      if (name.trim() !== '') {
        setPlayerName(name);
        navigate('../../components/gamescreen/GameScreen');
      } else {
        
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      }
    };
  
    return (
      <div className="homescreen">
        <div className='alert' style={{display: showAlert ? 'block' : 'none'}}>
            <p>Por favor, insira um nome</p>
        </div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        <button onClick={handleStartClick}>
          <span translate="no">Press Start</span>
        </button>
      </div>
    );
  }

export default HomeScreen;