import { useContext } from "react";
import { CursosContext } from "../../context/CursosContext";

export const useCursosContext = () => {
  const context = useContext(CursosContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }
  return context;
};