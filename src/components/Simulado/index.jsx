import React, { useEffect, useState } from 'react'
import {q} from '../../entities/entities'
import { paletaSuave } from '../../entities/paleta'
import {
  Container,
  Header,
  Enunciado,
  Informacoes,
  BoxAlternativas,
  ContainerButton,
  Alternativa,
  InfoLabel,
  HeaderLabel,
  Button
} from './styles'
import { useSimuladoContext } from '../../hook/context/useSimuladoContext'

const Simulado = () => {
  const {simulado} = useSimuladoContext();
  const [questaoAtual,setQuestaoAtual] =useState(q);
  const [numeroQuestao,setNumeroQuestao] = useState(0);
  const [totalQuestao, setTotalQuestao] = useState(0);
  const [alternativaSelecionada,setAlternativaSelecionada] = useState([-1]);
  const [stageComentario,setStageComentario] = useState([]);
  
  const handleSelectAlternativa =(index)=>{
    let aux=[...alternativaSelecionada];
    aux[numeroQuestao]=index;
    setAlternativaSelecionada(aux);
  }

  useEffect(()=>{
    try{
      setQuestaoAtual(simulado.questoes[numeroQuestao]);
      setTotalQuestao(simulado.questoes.length);
      
    }catch{
      setQuestaoAtual(q);
    }
  },[numeroQuestao])
  
  const handleResponder =()=>{
    let aux=[...stageComentario];
    aux[numeroQuestao]= questaoAtual.alternativas[alternativaSelecionada[numeroQuestao]].is_correct ? 1:2 ;
   
    setStageComentario(aux);
    console.log(aux);
  }

  const handleVoltar=()=>{
    if(numeroQuestao>0)
      setNumeroQuestao(numeroQuestao-1);
  }

  const handleProximo=()=>{
    if(numeroQuestao<(totalQuestao-1)){  
    setNumeroQuestao(numeroQuestao+1);
   }else{
    //todo modal terminar
   }

  }

  return (
    <Container>
      <Header>
        <HeaderLabel>Questão {numeroQuestao+1} de {totalQuestao}</HeaderLabel>
        <HeaderLabel> 10:52</HeaderLabel>
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
              correct={ a.is_correct && stageComentario[numeroQuestao] ? 1 :
                        stageComentario[numeroQuestao]===2 && index===alternativaSelecionada[numeroQuestao] ? 2 
                        : 3 }
              select={index===alternativaSelecionada[numeroQuestao]} 
              onClick={()=>stageComentario[numeroQuestao] ?"":handleSelectAlternativa(index)}>
                {a.alternativa}
            </Alternativa>)
        }
      </BoxAlternativas>
      <ContainerButton>
        <Button onClick={handleVoltar} bgcolor={paletaSuave.corSecundaria}>Voltar</Button>
        <Button onClick={handleResponder}>Responder</Button>
        <Button onClick={handleProximo} bgcolor={paletaSuave.corSecundaria}>{numeroQuestao<(totalQuestao-1)?"Proxima":"Finalizar"}</Button>
      </ContainerButton>
    </Container>
  )
}

export default Simulado
