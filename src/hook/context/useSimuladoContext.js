import { useContext } from "react";
import { SimuladoContext } from "../../context/SimuladoContext";

export const useSimuladoContext = () => {
  const context = useContext(SimuladoContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }
  return context;
};