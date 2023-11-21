import { createContext, useState} from "react";

export const StageContext = createContext();

export const StageContextProvider = ({ children }) => {
    //stages page meusCursos: 1-containerCards, 2-cursoDetails 
    const [meusCursosStage,setMeusCursosStage]= useState("containerCards"); 



    return (
        <StageContext.Provider
        value={{
            meusCursosStage,setMeusCursosStage
                }}
        >
        {children}
        </StageContext.Provider>
    );
};