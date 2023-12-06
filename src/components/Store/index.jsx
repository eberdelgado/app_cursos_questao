import React from 'react'
import Curso from '../Curso'
import { useCursosContext } from '../../hook/context/useCursosContext'
import ContainerCardsCursos from '../ContainerCardsCursos'


const Store = () => {
  const {allCursos} = useCursosContext();
  const renderCursos = ()=>{
    try{
      return allCursos.map((c)=>
        <Curso curso={c}/>
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

export default Store

