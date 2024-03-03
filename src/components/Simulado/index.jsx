import React, { useEffect, useState } from 'react'
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
  Button,
  InputNumeroQuestao
} from './styles'
import { CiPause1 } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useSimuladoContext } from '../../hook/context/useSimuladoContext'
import { useNavigate } from 'react-router-dom'
import { useStageContext } from '../../hook/context/useStageContext'
import { useCursosContext } from '../../hook/context/useCursosContext'
import Modal from '../Modal/ModalGenerico';
import { useFetchHistorico } from '../../hook/fetch/useFetchHistorico';
import {useUserContext } from '../../hook/context/useUserContext';
const Simulado = () => {
  //Context
  const {questoes,historico,historicoId,setHistorico,caderno} = useSimuladoContext();
  const {cursoDetails} = useCursosContext();
  const {setMeusCursosStage} =useStageContext();
 
  //variables
  const [numeroQuestao,setNumeroQuestao] = useState(0);
  const [displayNumeroQuestao,setDisplayNumeroQuestao]=useState(1);
  const [questaoAtual,setQuestaoAtual] =useState([]);
  const [totalQuestao, setTotalQuestao] = useState(0);
  const [alternativaSelecionada,setAlternativaSelecionada] = useState([-1]);
  const [stageComentario,setStageComentario] = useState([]); // 1 resposta correta -- 2 resposta errada -- 3 sem resposta
  const navigate=useNavigate();
  
  //modals
  const [modalFinalizar,setModalFinalizar] = useState(false);
  const [modalPausar,setModalPausar] = useState(false);

  //timer
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [pausado, setPausado] = useState(false);

  //fetches
  const {createHistorico,updateHistorico} = useFetchHistorico();


  /*//////////////////////////////////////////////////////////////////////////
                             use effects       
  /////////////////////////////////////////////////////////////////////////*/
  useEffect(() => {
    const intervalId = setInterval(() => {
      if(!pausado){
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
    if(historico.length>0){
      setAlternativaSelecionada(historico);
      setStageComentario(questoes.map((q,index)=>{
        //console.log(q.resposta&&historico[index])
        return q.isTrueOrFalse ? 
                ( (historico[index]==='n')? null:
                (Number(q.resposta) === Number(historico[index]) ? 1:2) )
                :( (historico[index]==='n')? null : q.alternativas[historico[index]].is_correct ? 1:2 ); 

      }))
     
    }else{
      setAlternativaSelecionada(questoes.map(()=>{return "n"}))
    }
  },[])

  useEffect(()=>{
    try{
      setQuestaoAtual(questoes[numeroQuestao]);
      setTotalQuestao(questoes.length);
    }catch{

    }
  },[numeroQuestao])

/*//////////////////////////////////////////////////////////////////////////
                            Handles       
/////////////////////////////////////////////////////////////////////////*/

  const handleSelectAlternativa =(index)=>{
    let aux=[...alternativaSelecionada];
    aux[numeroQuestao]=index;
    setAlternativaSelecionada(aux);
  }  
  
  const handleResponder =()=>{ 
    if(alternativaSelecionada[numeroQuestao]>=0){
      let aux=[...stageComentario];   
      aux[numeroQuestao]= questaoAtual.isTrueOrFalse ? 
                          (questaoAtual.resposta && alternativaSelecionada[numeroQuestao] ? 1:2)
                          : (questaoAtual.alternativas[alternativaSelecionada[numeroQuestao]].is_correct ? 1:2 ); 
      
      setStageComentario(aux);
    }
  }

  const handleVoltar=()=>{
    if(numeroQuestao>0){
      setNumeroQuestao(numeroQuestao-1);
      setDisplayNumeroQuestao(numeroQuestao);
    }else if(numeroQuestao===0){
      setModalFinalizar(true);
    }
  }

  const handleProximo=()=>{
    if(numeroQuestao<(totalQuestao-1)){  
      setNumeroQuestao(numeroQuestao+1);
      setDisplayNumeroQuestao(numeroQuestao+2);
    }else{
      setModalFinalizar(true);
    }
  }

  const handleFinalizar=(to)=>{
    setMeusCursosStage(to);
    setHistorico(alternativaSelecionada);
    const obj={
      caderno:caderno.id,
      historico:alternativaSelecionada.map(h=>String(h)).join('')
    }
    
    if(!historicoId){
      createHistorico(obj);
    }else{
      updateHistorico(historicoId,obj);
    }
    navigate("/meuscursos");
  }

  const handleSelectQuestao = (e)=>{
    if(e>0 && e<=totalQuestao){
      setNumeroQuestao(e-1);
    }
    setDisplayNumeroQuestao(e)
  }

  const handleCloseModal = ()=>{
    setModalFinalizar(false);
    setModalPausar(false)
  }

  const handlePausar = () =>{
    setModalPausar(true);
    setPausado(true);
    setPausado(false);
  }

  const render = ()=>{
    try{
      return (
        <>
        {modalFinalizar && 
          <Modal 
            texto={"Deseja finalizar o simulado?"} 
            valueB1={"voltar"}
            valueB2={"finalizar"}
            ModalClose={handleCloseModal}
            handle1={handleCloseModal}
            handle2={()=>handleFinalizar("simuladoResults")}
            />}
        {modalPausar && 
          <Modal 
          texto={"Simulado pausado!"} 
          valueB1={"Continuar simulado"}
          valueB2={"Voltar para a tela inicial"}
          ModalClose={handleCloseModal}
          handle1={handleCloseModal}
          handle2={()=>handleFinalizar("containerCards")}
          />
        
        }
        <Container>
          <Header>
            <HeaderLabel>Questão <InputNumeroQuestao min="1" max={totalQuestao} type='number' onChange={(e)=> handleSelectQuestao(e.target.value)} value={displayNumeroQuestao} /> de {totalQuestao}</HeaderLabel>
            <HeaderLabel> 
              {String(horas).padStart(2, '0')}:{String(minutos).padStart(2, '0')}:{String(segundos).padStart(2, '0')}  
              <div onClick={handlePausar}> <CiPause1 /> </div>
              <div onClick={()=>setModalFinalizar(true)}>   <MdClose /> </div>
            </HeaderLabel>
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
                  stageComentario[numeroQuestao]===2 && 1===Number(alternativaSelecionada[numeroQuestao]) ? 2 
                  : 3 }
                select={1===Number(alternativaSelecionada[numeroQuestao])} 
                onClick={()=>stageComentario[numeroQuestao] ?"":handleSelectAlternativa(1)}
              >
                Verdadeiro
              </Alternativa>
              <Alternativa
              correct={ !questaoAtual.resposta && stageComentario[numeroQuestao] ? 1 :
                stageComentario[numeroQuestao]===2 && 0===Number(alternativaSelecionada[numeroQuestao]) ? 2 
                : 3 }
                select={0===Number(alternativaSelecionada[numeroQuestao])} 
                onClick={()=>stageComentario[numeroQuestao] ?"":handleSelectAlternativa(0)}
                >
                Falso
              </Alternativa>
            </>
              :
              questaoAtual.alternativas.map((a,index)=>
                <Alternativa 
                  key={index}
                  correct={ a.is_correct && stageComentario[numeroQuestao] ? 1 :
                            stageComentario[numeroQuestao]===2 && index===Number(alternativaSelecionada[numeroQuestao]) ? 2 
                            : 3 }
                  select={index===Number(alternativaSelecionada[numeroQuestao])} 
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
          {(stageComentario[numeroQuestao]===1 || stageComentario[numeroQuestao]===2 ) ? 
            <ContainerComentario><h4>{questaoAtual.comentario}</h4></ContainerComentario>
            :""}
        </Container>
      </>
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
