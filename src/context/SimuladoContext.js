import { createContext, useEffect, useState} from "react";
import {sim} from "../entities/mok"

export const SimuladoContext = createContext();

export const SimuladoContextProvider = ({ children }) => {
    const [simulado, setSimulado] = useState(sim);
    const [questoes, setQuestoes] = useState();
    const [alternativaSelecionada,setAlternativaSelecionada] = useState([-1]);
  return (
    <SimuladoContext.Provider
      value={{
        simulado,setSimulado,
        alternativaSelecionada,setAlternativaSelecionada,
        questoes, setQuestoes
              }}
    >
      {children}
    </SimuladoContext.Provider>
  );
};