import React from 'react'
import {
    Container,
} from './styles'
import { useStageContext } from '../../hook/context/useStageContext'
import ContainerCards from './ContainerCards'
import MeuCursoDetails from './MeuCursoDetails'

const MeusCrusos = () => {
  //stages page meusCursos: 1-containerCards, 2-moreDetails 
  const {meusCursosStage} = useStageContext();  


  return (
    <Container>
      {meusCursosStage==="containerCards" && <ContainerCards/>}
      {meusCursosStage==="cursoDetails" && <MeuCursoDetails/>}
    </Container>
    
  )
}

export default MeusCrusos
