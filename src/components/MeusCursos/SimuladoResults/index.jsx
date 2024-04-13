import React, { useEffect, useState } from 'react'
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
  const {questoes, historico} = useSimuladoContext()
  const [acertos,setAcertos] = useState([]);
  const [corretas,setCorretas] = useState(0)
 
  useEffect(()=>{
    let auxAcertos=[];
    try{
      for(const [index,h] of historico.entries()){
        if(historico[index]==='n'){
          auxAcertos[index]=3;
        }else{
          if(questoes[index].isTrueOrFalse){
            
            if(Number(questoes[index].resposta) === Number(h)){
              auxAcertos[index]=1;
            }else{
              auxAcertos[index]=2;
            }
          }else{
            if(questoes[index].alternativa[Number(h)].is_correct){
              auxAcertos[index]=1;
            }else{
              auxAcertos[index]=2;
            }
          }
        }
      }
      setCorretas(auxAcertos.filter((a)=>a===1).length);
      setAcertos(auxAcertos);
    }catch{}
    
  },[])

  const handleClick = ()=>{
    setMeusCursosStage("cursoDetails");
  }

  const renderQuestions = ()=>{
    try{
      return(
        acertos.map((a,index)=>{
          return <Question is_correct={a} key={index} index={index}/>
        })
      )
    }catch{
      return ""
    }

  }

  return (
    <Container>
      <Header>
        <h1>Resultado simulado:</h1>
        <h2>Acertos: {corretas} de {historico.length} questões - {((corretas/historico.length)*100).toFixed(0)}%</h2>
        <ContainerButton>
            <button onClick={handleClick}>Voltar para o curso</button>
        </ContainerButton>
        

        <h2>Questoes:</h2>
      </Header>
      {renderQuestions()}
    </Container>
  )
}

export default SimuladoResults
