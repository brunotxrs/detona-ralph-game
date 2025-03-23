import React from 'react';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/homescreen/HomeScreen';
import GameScreen from './components/gamescreen/GameScreen'
import { NameProvider } from './components/namecontext/NameContext';
import Scoreboard from './components/scoreboard/Scoreboard';
import { ScoreProvider } from './components/scorecontext/ScoreContext';

function App() {
  return (
    <ScoreProvider>
      <NameProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/gamescreen" element={<GameScreen />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        
      </Routes>
    </BrowserRouter>
    </NameProvider>
    </ScoreProvider>
    
  );
}

export default App;
