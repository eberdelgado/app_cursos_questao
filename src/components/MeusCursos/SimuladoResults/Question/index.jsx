import React, { useEffect, useState } from 'react'
import {
    Container,
    Header,HeaderLabel,
    Informacoes,InfoLabel,
    Enunciado,
    BoxAlternativas,Alternativa
    ,ContainerComentario
} from './styles'
import { useSimuladoContext } from '../../../../hook/context/useSimuladoContext'
import { useCursosContext } from '../../../../hook/context/useCursosContext'

const Question = (props) => {
    const {cursoDetails} = useCursosContext()
    const {simulado,questoes,historico,caderno} = useSimuladoContext()
    const alternativaSelecionada = historico[props.index]
    const [questaoAtual] = useState(questoes[props.index]);
     // 1 acertou -- 2 errou -- 3 não respondida 

    const isCorrect =() =>{
        
        if(questaoAtual.isTrueOrFalse){
            return questaoAtual.resposta!==alternativaSelecionada;
            
        }else{
            return (!questaoAtual.alternativas[alternativaSelecionada].is_correct)
        }
    }

    const statusError=isCorrect();
    // status 1--certa // 2-errada // 3-não respondida
    const status = statusError ? 2 : 
                !alternativaSelecionada && alternativaSelecionada!==0 ? 3 : 1; 
    //console.log(questaoAtual.resposta);
    //console.log(alternativaSelecionada);
    //console.log((questaoAtual.resposta && alternativaSelecionada));

    const render = ()=>{
        try{
        return <Container>
                <Header>
                    <HeaderLabel>Questão {props.index+1}</HeaderLabel>
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
                { questaoAtual.isTrueOrFalse? 
                        <>
                            <Alternativa    
                            correct={ questaoAtual.resposta ? 1 :
                                statusError && alternativaSelecionada===1 ? 2 
                                : 3 }
                            >
                            Verdadeiro
                            </Alternativa>
                            <Alternativa
                            correct={ !questaoAtual.resposta ? 1 :
                                statusError && 0===alternativaSelecionada ? 2 
                            : 3 }
                            >
                            Falso
                            </Alternativa>
                        </>
                            :
                        questaoAtual.alternativas.map((a,index)=>
                        <Alternativa 
                            key={index}
                            correct={ a.is_correct ? 1 :
                                    statusError && index===alternativaSelecionada ? 2 
                                    : 3 }>
                            
                            {a.alternativa}
                        </Alternativa>)
                }
                <ContainerComentario><h4>{questaoAtual.comentario}</h4></ContainerComentario>
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
