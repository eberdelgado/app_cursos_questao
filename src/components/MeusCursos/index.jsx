import React, { useEffect } from 'react'
import { useStageContext } from '../../hook/context/useStageContext'
import ContainerCards from './ContainerCards'
import MeuCursoDetails from './MeuCursoDetails'
import SimuladoResults from './SimuladoResults'
import { useFetchMeusCursos } from '../../hook/fetch/useFetchMeusCursos'
import { useCursosContext } from '../../hook/context/useCursosContext'

const MeusCursos = () => {
  //stages page meusCursos: 1-containerCards, 2-moreDetails , 3-simuladoResults
  const {meusCursosStage} = useStageContext();  
  const {meusCursosLoad,getMeusCursos} =useFetchMeusCursos()
  const {setMeusCursos} = useCursosContext()

  useEffect(()=>{
    getMeusCursos()
  },[])

  useEffect(()=>{
    setMeusCursos(meusCursosLoad)
  },[meusCursosLoad])
  
  return (
    <>
      {meusCursosStage==="containerCards" && <ContainerCards/>}
      {meusCursosStage==="cursoDetails" && <MeuCursoDetails/>}
      {meusCursosStage==="simuladoResults" && <SimuladoResults/>}
    </>
    
  )
}

export default MeusCursos
