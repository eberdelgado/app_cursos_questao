import React from 'react'
import Curso from '../../Curso'
import { useCursosContext } from '../../../hook/context/useCursosContext'
import ContainerCardsCursos from '../../ContainerCardsCursos'


const ContainerCards = (props) => {
  const {cursos,setCursoDetails,allCursos} = useCursosContext();
  
  const handleClick=(c)=>{
    props.onClick();
    setCursoDetails(c);
  }

  const renderCursos = ()=>{
    try{
      return cursos.map((c)=>
        <Curso onClick={()=>handleClick(c)} curso={c}/>
      )
      
    }catch{
      return "Nenhum Curso encontrado"
    }
  }
 
  return (
    <ContainerCardsCursos title={"Catalogo de cursos:"}>
      {renderCursos()}
    </ContainerCardsCursos>
  )
}

export default ContainerCards

