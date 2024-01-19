import React from 'react'
import {
    Container,
    Header,
    Contents
} from './styles'
import { useCursosContext } from '../../../hook/context/useCursosContext'

const StoreCursoDetails = () => {
    const {cursoDetails} = useCursosContext();
    console.log(cursoDetails);
    return (
    <Container>
        <Header>
        </Header>
        <Contents>
            <p>Curso: {cursoDetails.nome}</p>
            <p>Concurso: {cursoDetails.concurso}</p>
            <p>Ano: {cursoDetails.ano}</p>
            <p>Numero de cadernos: {cursoDetails.caderno.length}</p>
            <p>Preço: R$ {cursoDetails.valor}</p>
            {//<button>Adquirir Curso</button>
            }
            <p>Para adquirir esse curso entre em contato: Telefone: (44) 9 9999-7854</p>
        </Contents>
    </Container>
  )
}

export default StoreCursoDetails