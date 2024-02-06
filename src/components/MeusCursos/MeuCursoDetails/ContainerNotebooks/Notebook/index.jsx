import React from 'react'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { useFetchCadernos } from '../../../../../hook/fetch/useFetchCadernos'
import {useSimuladoContext} from '../../../../../hook/context/useSimuladoContext'

const Notebook = (props) => {
  const {getCaderno,loading}=useFetchCadernos()
  const {setQuestoes,setCaderno} = useSimuladoContext()
  const caderno = props.caderno
  const navigate = useNavigate();
  
  const handleClick=async ()=>{
    const response = await getCaderno(caderno.id)
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
