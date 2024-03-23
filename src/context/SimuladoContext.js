import { createContext,  useState} from "react";
import {sim} from "../entities/mok"

export const SimuladoContext = createContext();

export const SimuladoContextProvider = ({ children }) => {
    const [simulado, setSimulado] = useState(sim);
    const [questoes, setQuestoes] = useState();
    const [historico,setHistorico] = useState([]);
    const [historicoId,setHistoricoId] = useState();
    const [caderno,setCaderno] = useState();
    const [statusQuestion,setStatusQuestion] = useState([]); // 1 resposta correta -- 2 resposta errada -- 3 sem resposta

  return (
    <SimuladoContext.Provider
      value={{
        simulado,setSimulado,
        questoes, setQuestoes,
        caderno,setCaderno,
        statusQuestion,setStatusQuestion,
        historico,setHistorico,
        historicoId,setHistoricoId
              }}
    >
      {children}
    </SimuladoContext.Provider>
  );
};