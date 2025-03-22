import React from 'react';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/homescreen/HomeScreen';
import GameScreen from './components/gamescreen/GameScreen'
import { NameProvider } from './components/namecontext/NameContext';

function App() {
  return (
    <NameProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/next-page" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
    </NameProvider>
  );
}

export default App;
