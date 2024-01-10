import React from 'react'
import {
    Container,
} from './styles'
import Curso from '../../Curso'
import { useCursosContext } from '../../../hook/context/useCursosContext'
import { useStageContext } from '../../../hook/context/useStageContext'
import ContainerCardsCursos from '../../ContainerCardsCursos'
import { useFetchMeusCursos } from '../../../hook/fetch/useFetchMeusCursos'

const ContainerCards = () => {
    const {meusCursos,setCursoDetails} = useCursosContext();
    const {getCursoDetails} = useFetchMeusCursos()
    const {setMeusCursosStage} = useStageContext(); 
    const handleClick = async (c)=>{
       
       // setCursoDetails({...c.cursos,
         //   status:c.status}); 
        const response = await getCursoDetails(c.id)
        setCursoDetails(response) 
        setMeusCursosStage("cursoDetails");
        
    }
    
    const renderCursos = ()=>{
        try{
        return meusCursos.map((c,index)=>(
            <Curso 
                onClick={()=>handleClick(c)}
                key={index} curso={c.cursos} status={c.status}/>
        ))
        }catch{
        return null;
        }
    }
    return (
        <ContainerCardsCursos title={"Meus Cursos("+(meusCursos?meusCursos.length:0)+")"}>
            {renderCursos()}
        </ContainerCardsCursos>
        
    )
}

export default ContainerCards

