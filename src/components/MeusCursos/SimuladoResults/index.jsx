import React from 'react'
import {
    Container,
} from './styles'
import { useSimuladoContext } from '../../../hook/context/useSimuladoContext'
import Question from './Question'

const SimuladoResults = () => {
  const {simulado,alternativaSelecionada} = useSimuladoContext()


  console.log(alternativaSelecionada)
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
      resultado simulado:
      Acertos: 15 de 30 questões;
      Porcentagem: 50%;
      ir para os detalhes do curso
      if caderno botão de salvar

      questoes:
      {renderQuestions()}
    </Container>
  )
}

export default SimuladoResults
