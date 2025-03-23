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
        if(name.length >= 3 && name.length <= 10 ){
          setPlayerName(name);
          navigate('/gamescreen');
        }else if (name.length < 3) {
          
          setShowAlert('Nome deve ter no mínimo 3 caracteres.');
      setTimeout(() => setShowAlert(''), 3000);
          
        }else {
          setShowAlert('Nome deve ter no máximo 10 caracteres.');
          setTimeout(() => setShowAlert(''), 3000); 
        }

      } else {
        setShowAlert('Por favor, insira um nome.');
        setTimeout(() => setShowAlert(''), 3000);
      }
    };
  
    return (
      <div className="homescreen">
        <div className='alert' style={{display: showAlert ? 'block' : 'none'}}>
            <p>{showAlert}</p>
        </div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        <div className='button-box'>
          <button className='button' onClick={handleStartClick}>
            <span className='button-text'  translate="no">Press Start</span>
          </button>
        </div>
      </div>
    );
  }

export default HomeScreen;