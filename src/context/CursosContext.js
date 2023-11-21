import { createContext, useState} from "react";
import { mc } from "../entities/mok";

export const CursosContext = createContext();

export const CursosContextProvider = ({ children }) => {
    const [meusCursos,setMeusCursos]= useState(mc);
    const [cursoDetails,setCursoDetails] = useState(null);

    return (
        <CursosContext.Provider
        value={{
            meusCursos,setMeusCursos,
            cursoDetails,setCursoDetails
                }}
        >
        {children}
        </CursosContext.Provider>
    );
};