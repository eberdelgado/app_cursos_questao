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
  ContainerComentario,
  Alternativa,
  InfoLabel,
  HeaderLabel,
  Button
} from './styles'
import { useSimuladoContext } from '../../hook/context/useSimuladoContext'
import { useNavigate } from 'react-router-dom'
import { useStageContext } from '../../hook/context/useStageContext'
import { useCursosContext } from '../../hook/context/useCursosContext'

const Simulado = () => {
  const {questoes,setHistorico,caderno} = useSimuladoContext();
  const {cursoDetails} = useCursosContext();  
  const [numeroQuestao,setNumeroQuestao] = useState(0);
  const [questaoAtual,setQuestaoAtual] =useState([]);
  const [totalQuestao, setTotalQuestao] = useState(0);
  const [alternativaSelecionada,setAlternativaSelecionada] = useState([-1]);
  const [stageComentario,setStageComentario] = useState([]); // 1 resposta correta -- 2 resposta errada -- 3 sem resposta
  const navigate=useNavigate();
  const {setMeusCursosStage} =useStageContext();

  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Incrementa os segundos
      setSegundos(segundos => (segundos + 1) % 60);

      // Incrementa os minutos a cada 60 segundos
      if (segundos === 59) {
        setMinutos(minutos => (minutos + 1) % 60);
      }

      // Incrementa as horas a cada 60 minutos
      if (minutos === 59 && segundos === 59) {
        setHoras(horas => horas + 1);
      }
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [horas, minutos, segundos]);




  useEffect(()=>{
    if(questoes){
      setQuestaoAtual(questoes[0]);
    }else{
      navigate("/meuscursos")
    }
    
  },[])

  const handleSelectAlternativa =(index)=>{
    let aux=[...alternativaSelecionada];
    aux[numeroQuestao]=index;
    setAlternativaSelecionada(aux);
  }

  useEffect(()=>{
    try{
      setQuestaoAtual(questoes[numeroQuestao]);
      setTotalQuestao(questoes.length);
    }catch{

    }
  },[numeroQuestao])
  
  const handleResponder =()=>{
   
    if(alternativaSelecionada[numeroQuestao]>=0){
      let aux=[...stageComentario];
     
      aux[numeroQuestao]= questaoAtual.isTrueOrFalse ? 
                          (!questaoAtual.resposta && alternativaSelecionada[numeroQuestao] ? 1:2)
                          : (questaoAtual.alternativas[alternativaSelecionada[numeroQuestao]].is_correct ? 1:2 ); 
      
      setStageComentario(aux);
    }
    
  }
  const handleVoltar=()=>{
    if(numeroQuestao>0)
      setNumeroQuestao(numeroQuestao-1);
    else if(numeroQuestao==0){
      navigate("/meuscursos");
    }
  }

  const handleProximo=()=>{
    if(numeroQuestao<(totalQuestao-1)){  
    setNumeroQuestao(numeroQuestao+1);
   }else{
    //todo modal terminar
    setMeusCursosStage("simuladoResults");
    setHistorico(alternativaSelecionada);
    navigate("/meuscursos");
   }

  }

  const render = ()=>{
    try{
      return (
        <Container>
      <Header>
        <HeaderLabel>Questão {numeroQuestao+1} de {totalQuestao}</HeaderLabel>
        <HeaderLabel> {String(horas).padStart(2, '0')}:{String(minutos).padStart(2, '0')}:{String(segundos).padStart(2, '0')} </HeaderLabel>
      </Header>
      <Informacoes>
        <InfoLabel>Codigo: {caderno.codigo} </InfoLabel>
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
            correct={ questaoAtual.resposta && stageComentario[numeroQuestao] ? 1 :
              stageComentario[numeroQuestao]===2 && 0===alternativaSelecionada[numeroQuestao] ? 2 
              : 3 }
            select={0===alternativaSelecionada[numeroQuestao]} 
            onClick={()=>stageComentario[numeroQuestao] ?"":handleSelectAlternativa(0)}
          >
            Verdadeiro
          </Alternativa>
          <Alternativa
          correct={ !questaoAtual.resposta && stageComentario[numeroQuestao] ? 1 :
            stageComentario[numeroQuestao]===2 && 1===alternativaSelecionada[numeroQuestao] ? 2 
            : 3 }
            select={1===alternativaSelecionada[numeroQuestao]} 
            onClick={()=>stageComentario[numeroQuestao] ?"":handleSelectAlternativa(1)}
            >
            Falso
          </Alternativa>
        </>
          :
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
      {(stageComentario[numeroQuestao]==1 || stageComentario[numeroQuestao]==2 ) ? 
        <ContainerComentario><h4>{questaoAtual.comentario}</h4></ContainerComentario>
        :""}
    </Container>
      )

    }catch(error){
      console.error(error);
    }

  }

  return (
    render()
  )
}

export default Simulado
