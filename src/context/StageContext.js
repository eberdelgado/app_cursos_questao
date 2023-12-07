import { createContext, useState} from "react";

export const StageContext = createContext();

export const StageContextProvider = ({ children }) => {
    //stages page meusCursos: 1-containerCards, 2-cursoDetails 
    const [meusCursosStage,setMeusCursosStage]= useState("containerCards"); 
    
    //stages page meusCursos: 1-containerCards, 2-cursoDetails 
    const [storeStage, setStoreStage] = useState("containerCards")
    const [modalCursoDetail, setModalCursoDetail] = useState(true)

    return (
        <StageContext.Provider
        value={{
            meusCursosStage,setMeusCursosStage,
            storeStage, setStoreStage,
            modalCursoDetail, setModalCursoDetail
                }}
        >
        {children}
        </StageContext.Provider>
    );
};