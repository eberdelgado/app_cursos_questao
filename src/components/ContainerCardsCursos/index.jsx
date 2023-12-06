import React from 'react'
import {
    Container,
    ContainerCursos,
    Header
} from './styles'

const ContainerCardsCursos = (props) => {
  return (
    <Container>
        <Header>
          <h1>{props.title}</h1>
        </Header>
        <ContainerCursos>
          {props.children}
        </ContainerCursos>
    </Container>
  )
}

export default ContainerCardsCursos