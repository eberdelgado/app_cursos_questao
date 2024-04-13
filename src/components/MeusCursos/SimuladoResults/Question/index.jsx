import React, { useEffect, useState } from 'react'
import {
    Container,
    Header,
    HeaderLabel,
    Informacoes,
    InfoLabel,
    Enunciado,
    BoxAlternativas,
    Alternativa,
    ContainerComentario,
    LabelQNR
} from './styles'
import { useSimuladoContext } from '../../../../hook/context/useSimuladoContext'
import { useCursosContext } from '../../../../hook/context/useCursosContext'

const Question = (props) => {
    const {cursoDetails} = useCursosContext()
    const {questoes,historico,caderno} = useSimuladoContext()
    const alternativaSelecionada = Number(historico[props.index])
    const [questaoAtual] = useState(questoes[props.index]);
     // 1 acertou -- 2 errou -- 3 não respondida 
    const [status,setStatus] = useState(props.status)
 

    const render = ()=>{
        try{
        return <Container>
                <Header>
                    <HeaderLabel>Questão {props.index+1}</HeaderLabel>
                    {props.is_correct ===3 && <LabelQNR>Questao não respondida</LabelQNR>}
                </Header>
                <Informacoes>
                    <InfoLabel>Codigo: {questaoAtual.codigo} </InfoLabel>
                    <InfoLabel>Caderno: {caderno.nome} </InfoLabel>
                    <InfoLabel> Banca: {cursoDetails.cursos.banca} </InfoLabel>
                    <InfoLabel>Concurso: {cursoDetails.cursos.concurso} </InfoLabel>
                    <InfoLabel>Ano: {questaoAtual.ano} </InfoLabel>
                </Informacoes>      
                <Enunciado>{questaoAtual.enunciado} </Enunciado>
                <BoxAlternativas>
                { questaoAtual.isTrueOrFalse ? 
                        <>
                            <Alternativa    
                            correct={ questaoAtual.resposta && props.is_correct!==3 ? 1 : 
                                        alternativaSelecionada === 1 && props.is_correct ===2 ? 2 : 3
                                }
                            >
                            Verdadeiro
                            </Alternativa>
                            <Alternativa
                            correct={ !questaoAtual.resposta && props.is_correct!==3 ? 1 : 
                                alternativaSelecionada === 0 && props.is_correct ===2 ? 2 : 3
                               }
                            >
                            Falso
                            </Alternativa>
                        </>
                            :
                        questaoAtual.alternativas.map((a,index)=>
                        <Alternativa 
                            key={index}
                            correct={ a.is_correct ? 1 :
                                    status && index===alternativaSelecionada ? 2 
                                    : 3 }>
                            
                            {a.alternativa}
                        </Alternativa>)
                }
                {props.is_correct !==3 && <ContainerComentario><h4>{questaoAtual.comentario}</h4></ContainerComentario>}
                </BoxAlternativas>
            </Container>
            
        }catch(error){
            console.log(error)
                return null
            }

    }

  return (
    {render}
  )
}

export default Question
