import React from 'react'
import { 
    Container,
    Header,
    Content,
    LabelInfo,
    ButtonDetails 
} from './styles'

const Curso = (props) => {
    const curso=props.curso;    
    return (
    <Container>
        <Header>
            <LabelInfo></LabelInfo>
        </Header>
        <Content>
            <LabelInfo>Curso: {curso.nome}</LabelInfo>
            <LabelInfo>Concurso: {curso.concurso}</LabelInfo>
            <LabelInfo>Ano: {curso.ano}</LabelInfo>
            <LabelInfo>Status: {curso.status}</LabelInfo>
            <ButtonDetails  onClick={props.onClick}>+ Detalhes</ButtonDetails>
        </Content>

    </Container>
)}

export default Curso
