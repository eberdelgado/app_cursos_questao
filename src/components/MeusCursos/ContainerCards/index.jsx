import React from 'react'
import {
    Container,
} from './styles'
import Curso from '../../Curso'
import { useCursosContext } from '../../../hook/context/useCursosContext'
import { useStageContext } from '../../../hook/context/useStageContext'
import ContainerCardsCursos from '../../ContainerCardsCursos'

const ContainerCards = () => {
    const {meusCursos,setCursoDetails} = useCursosContext();
    const {setMeusCursosStage} = useStageContext(); 
    const handleClick = (c)=>{
        setMeusCursosStage("cursoDetails");
        setCursoDetails(c);
    }
    
    const renderCursos = ()=>{
        try{
        return meusCursos.map((c,index)=>(
            <Curso 
                onClick={()=>handleClick(c)}
                key={index} curso={c}/>
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

