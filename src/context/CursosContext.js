import { createContext, useState} from "react";
import { mc } from "../entities/mok";

export const CursosContext = createContext();

export const CursosContextProvider = ({ children }) => {
    const [cursos,setCursos] = useState();
    const [meusCursos,setMeusCursos]= useState();
    const [cursoDetails,setCursoDetails] = useState(null);
    const [allCursos, setAllCursos] = useState (mc);
    return (
        <CursosContext.Provider
        value={{
            meusCursos,setMeusCursos,
            cursoDetails,setCursoDetails,
            allCursos, setAllCursos,
            cursos,setCursos
                }}
        >
        {children}
        </CursosContext.Provider>
    );
};