import React from 'react'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { useFetchCadernos } from '../../../../../hook/fetch/useFetchCadernos'
import {useSimuladoContext} from '../../../../../hook/context/useSimuladoContext'
import { useFetchHistorico } from '../../../../../hook/fetch/useFetchHistorico'

const Notebook = (props) => {
  const {getCaderno,loading}=useFetchCadernos()
  const {getHistorico} = useFetchHistorico()
  const {setQuestoes,setCaderno,setHistorico,setHistoricoId,setHistoricoCompleto} = useSimuladoContext()
  const caderno = props.caderno
  const navigate = useNavigate();
  
  const handleClick=async ()=>{
    const response = await getCaderno(caderno.id);
    const historico = await getHistorico(caderno.id);
    if (historico.length>0){
      
      try{
        
        setHistorico(historico[0].historico.split("")); 
        setHistoricoId(historico[0].id);
        setHistoricoCompleto(historico[0]);
        }catch{
        setHistorico([]);
      }
      
    }else{
      setHistorico([])
    }

    if (!loading && response){
      setCaderno(caderno)
      setQuestoes(response.questoes)  
      navigate('/simulado')

    }
      
  }
  
  return (
    <Container>
        <p>{caderno.codigo} | {caderno.nome}</p>
        <button onClick={handleClick}>iniciar caderno</button>
    </Container>
  )
}

export default Notebook
