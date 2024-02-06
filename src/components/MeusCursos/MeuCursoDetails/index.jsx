import React, { useEffect } from 'react'
import {
  Container,
  Header,
  Contents,
  InfoContents,
  DivInfo,
  DivButtonInfo,
} from './styles'
import { useCursosContext } from '../../../hook/context/useCursosContext'
import ContainerNotebooks from './ContainerNotebooks'
import { useNavigate } from 'react-router-dom'

const MeuCursoDetails = () => {
  const navigate=useNavigate();
  const {cursoDetails}=useCursosContext();
 
  const handleClick=()=>{
    navigate("/simulado")
  }
  return (
    <Container>
      <Header/>
      <Contents>
        <InfoContents>
          <DivInfo>
            <p>Curso:{cursoDetails.cursos.nome} | Concurso:{cursoDetails.cursos.concurso} | Banca:{cursoDetails.cursos.banca} | Ano:{cursoDetails.cursos.ano}</p>
            <p>Descrição:{cursoDetails.cursos.descricao}</p>
            <p>Status:{cursoDetails.status}</p>
          </DivInfo>
          {/*<DivButtonInfo>
            <button onClick={handleClick}>iniciar questões</button>
        </DivButtonInfo>*/}
        </InfoContents>
        <ContainerNotebooks/>
      </Contents>
      
    </Container>
  )
}

export default MeuCursoDetails
