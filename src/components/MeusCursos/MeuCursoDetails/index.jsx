import React from 'react'
import {
  Container,
  Header,
  Contents,
  InfoContents,
  DivInfo,
  DivButtonInfo,
} from './style'
import { useCursosContext } from '../../../hook/context/useCursosContext'
import ContainerNotebooks from './ContainerNotebooks'
import { useNavigate } from 'react-router-dom'

const MeuCursoDetails = () => {
  const navigate=useNavigate();
  const {cursoDetails}=useCursosContext()
  
  const handleClick=()=>{
    navigate("/simulado")
  }
  return (
    <Container>
      <Header/>
      <Contents>
        <InfoContents>
          <DivInfo>
            <p>Curso:{cursoDetails.nome} | Concurso:{cursoDetails.concurso} | Banca:{cursoDetails.banca} | Ano:{cursoDetails.ano}</p>
            <p>Descrição:{cursoDetails.descricao}</p>
            <p>Numero de questões:{cursoDetails.numero_questoes}</p>
            <p>status:{cursoDetails.status}</p>
          </DivInfo>
          <DivButtonInfo>
            <button onClick={handleClick}>iniciar questões</button>
          </DivButtonInfo>
        </InfoContents>
        <ContainerNotebooks/>
      </Contents>
      
    </Container>
  )
}

export default MeuCursoDetails
