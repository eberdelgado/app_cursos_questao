import React, { useState } from 'react'
import {
    Container,
    Header,HeaderLabel,
    Informacoes,InfoLabel,
    Enunciado,
    BoxAlternativas,Alternativa
} from './styles'
import { useSimuladoContext } from '../../../../hook/context/useSimuladoContext'

const Question = (props) => {
    const {simulado,alternativaSelecionada} = useSimuladoContext()
    const [questaoAtual, setQuestaoAtual] = useState(simulado.questoes[props.index]);
   
    const render = ()=>{
        try{
        return <Container>
                <Header>
                    <HeaderLabel>Questão {props.index+1}</HeaderLabel>
                </Header>
                <Informacoes>
                    <InfoLabel>Disciplina: {questaoAtual.disciplina} </InfoLabel>
                    <InfoLabel>Assunto: {questaoAtual.assunto} </InfoLabel>
                    <InfoLabel> Banca: {questaoAtual.banca} </InfoLabel>
                    <InfoLabel>Concurso: {questaoAtual.concurso} </InfoLabel>
                    <InfoLabel>Ano: {questaoAtual.ano} </InfoLabel>
                </Informacoes>      
                <Enunciado>{questaoAtual.enunciado} </Enunciado>
                <BoxAlternativas>
                    {
                    questaoAtual.alternativas.map((a,index)=>
                        <Alternativa 
                        key={index}
                        correct={ a.is_correct ? 1 :
                                  index===alternativaSelecionada[props.index] ? 2 
                                  : 3 }>
                            {a.alternativa}
                        </Alternativa>)
                    }
                </BoxAlternativas>
            </Container>
            
        }catch{
                return null
            }

    }

  return (
    {render}
  )
}

export default Question
