import React from 'react'
import { 
    Container, 
    Notebook,
    Header,
    DivButton
} from './style'
import { useNavigate } from 'react-router-dom'
    const ContainerNotebooks = () => {
    const navigate = useNavigate();

    const handleClick=()=>{
        navigate('/simulado')
    }

  return (
    <Container>
          <Header>
            <p>Meus cadernos(2):</p>  
            <DivButton>
                <button onClick={handleClick}>Criar caderno</button>
            </DivButton>
          </Header>
          <Notebook>
            <p>Caderno Português | tentativas: 2 | Ultima tentativa: 85% | Numero de disciplinas: 1 | Numero de questões:60</p>
            <button onClick={handleClick}>iniciar caderno</button>
          </Notebook>
          <Notebook>
            <p>Caderno matemática | tentativas: 1 | Ultima tentativa: 31% | Numero de disciplinas: 2 | Numero de questões:52</p>
            <button onClick={handleClick}> iniciar caderno</button>
          </Notebook>
          <Notebook>
            <p>Caderno Direito tributário | tentativas: 5 | Ultima tentativa: 52% | Numero de disciplinas: 3 | Numero de questões:82</p>
            <button onClick={handleClick}>iniciar caderno</button>
          </Notebook>
          <Notebook>
            <p>Caderno Direito tributário | tentativas: 5 | Ultima tentativa: 52% | Numero de disciplinas: 3 | Numero de questões:82</p>
            <button onClick={handleClick}>iniciar caderno</button>
          </Notebook> <Notebook>
            <p>Caderno Direito tributário | tentativas: 5 | Ultima tentativa: 52% | Numero de disciplinas: 3 | Numero de questões:82</p>
            <button>iniciar caderno</button>
          </Notebook> <Notebook>
            <p>Caderno Direito tributário | tentativas: 5 | Ultima tentativa: 52% | Numero de disciplinas: 3 | Numero de questões:82</p>
            <button>iniciar caderno</button>
          </Notebook> <Notebook>
            <p>Caderno Direito tributário | tentativas: 5 | Ultima tentativa: 52% | Numero de disciplinas: 3 | Numero de questões:82</p>
            <button>iniciar caderno</button>
          </Notebook> <Notebook>
            <p>Caderno Direito tributário | tentativas: 5 | Ultima tentativa: 52% | Numero de disciplinas: 3 | Numero de questões:82</p>
            <button>iniciar caderno</button>
          </Notebook> <Notebook>
            <p>Caderno Direito tributário | tentativas: 5 | Ultima tentativa: 52% | Numero de disciplinas: 3 | Numero de questões:82</p>
            <button>iniciar caderno</button>
          </Notebook>
    </Container>
  )
}

export default ContainerNotebooks
