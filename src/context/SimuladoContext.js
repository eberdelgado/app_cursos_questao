import { createContext, useEffect, useState} from "react";
import {sim} from "../entities/mok"

export const SimuladoContext = createContext();

export const SimuladoContextProvider = ({ children }) => {
    const [simulado, setSimulado] = useState(sim);
    
  return (
    <SimuladoContext.Provider
      value={{
        simulado,setSimulado
              }}
    >
      {children}
    </SimuladoContext.Provider>
  );
};