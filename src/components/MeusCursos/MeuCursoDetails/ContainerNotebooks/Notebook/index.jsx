import React from 'react'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

const Notebook = (props) => {
  const caderno = props.caderno
  console.log(caderno)
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/simulado')
    }
  return (
    <Container>
        <p>{caderno.codigo} | {caderno.nome}</p>
        <button onClick={handleClick}>iniciar caderno</button>
    </Container>
  )
}

export default Notebook
