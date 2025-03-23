import React, { createContext, useState} from "react";


export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
    const [finalScore, setFinalScore] = useState(0);


    return (
        <ScoreContext.Provider value={{ finalScore, setFinalScore }}>
            {children}
        </ScoreContext.Provider>
    );

};