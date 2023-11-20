import React from 'react'
import { 
    Container,
    Header,
    Content,
    LabelInfo, 
} from './styles'

const Curso = () => (
    <Container>

        <Header>
            <LabelInfo>Codigo: 12548</LabelInfo>
        </Header>
        <Content>
            <LabelInfo>Curso: Policia Federal</LabelInfo>
            <LabelInfo>Concurso: Policia Federal</LabelInfo>
            <LabelInfo>Banca:Cebraspe</LabelInfo>
            <LabelInfo>Ano: 2024</LabelInfo>
            <LabelInfo>Status: Matriculado</LabelInfo>
            <LabelInfo>Numero de questões: 1000</LabelInfo>
        </Content>

    </Container>
)

export default Curso
