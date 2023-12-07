import React from 'react'
import {
    Container,
    Header,
    Contents
} from './styles'
import { useCursosContext } from '../../../hook/context/useCursosContext'

const StoreCursoDetails = () => {
    const {cursoDetails: curso,setCursoDetails} = useCursosContext();
  
    return (
    <Container>
        <Header>
        </Header>
        <Contents>
            <p>Curso: curso.nome</p>
            <p>Concurso: curso.concurso</p>
            <p>Ano: curso.ano</p>
            <p>Status: curso.status</p>
            <p>Numero de questoes: curso.numero deQuestoes</p>
            <p>Preço: R$ 150,99</p>
            <p>Disciplinas: Matematica; português; direito Civil</p>
            <button>Adquirir Curso</button>
        </Contents>
    </Container>
  )
}

export default StoreCursoDetails