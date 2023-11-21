import { useContext } from "react";
import { StageContext } from "../../context/StageContext";

export const useStageContext = () => {
  const context = useContext(StageContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }
  return context;
};