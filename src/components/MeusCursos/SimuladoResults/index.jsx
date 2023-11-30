import React from 'react'
import {
    Container,
    Header,
    ContainerButton
} from './styles'
import { useSimuladoContext } from '../../../hook/context/useSimuladoContext'
import Question from './Question'
import { useStageContext } from '../../../hook/context/useStageContext'

const SimuladoResults = () => {
  const {setMeusCursosStage} = useStageContext(); 
  const {simulado,alternativaSelecionada} = useSimuladoContext()
  const handleClick = ()=>{
    setMeusCursosStage("cursoDetails");

  }

  const renderQuestions = ()=>{
    try{
      return(
        simulado.questoes.map((q,index)=>(
          <Question index={index}/>
        ))
      )
    }catch{
      return ""
    }

  }
  return (
    <Container>
      <Header>
        <h1>Resultado simulado:</h1>
        <h2>Acertos: 15 de 30 questões - 50%</h2>
        <ContainerButton>
            <button onClick={handleClick}>Voltar para o curso</button>
            <button>Salvar resultado</button>
        </ContainerButton>
        

        <h2>Questoes:</h2>
      </Header>
      
      {renderQuestions()}
    </Container>
  )
}

export default SimuladoResults
