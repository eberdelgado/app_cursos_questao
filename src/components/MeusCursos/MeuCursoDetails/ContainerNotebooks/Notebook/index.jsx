import React from 'react'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

const Notebook = () => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/simulado')
    }
  return (
    <Container>
        <p>Caderno Português | tentativas: 2 | Ultima tentativa: 85% | Numero de disciplinas: 1 | Numero de questões:60</p>
        <button onClick={handleClick}>iniciar caderno</button>
    </Container>
  )
}

export default Notebook
