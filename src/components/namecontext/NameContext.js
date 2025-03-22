import React, { createContext, useState } from 'react';

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');

  return (
    <NameContext.Provider value={{ playerName, setPlayerName }}>
      {children}
    </NameContext.Provider>
  );
};
