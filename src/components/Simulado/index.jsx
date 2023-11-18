import React from 'react'
import {
  Container,
  Header,
  Enunciado,
  Informacoes,
  BoxAlternativas,
  ContainerButton,
  Alternativa,
  InfoLabel,
  HeaderLabel,
  Button
} from './styles'

const Simulado = () => {
  return (
    <Container>
      <Header>
        <HeaderLabel>Questão 5 de 10</HeaderLabel>
        <HeaderLabel> 10:52</HeaderLabel>
      </Header>
      <Informacoes>
        <InfoLabel>disciplina: Portugues </InfoLabel>
        <InfoLabel>Assunto: Verbos </InfoLabel>
        <InfoLabel> Banca: CESP </InfoLabel>
        <InfoLabel>Concurso: Prefeitura de campo mourão </InfoLabel>
        <InfoLabel>Ano: 2020 </InfoLabel>
      </Informacoes>      
      <Enunciado>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Enunciado>
      <BoxAlternativas>
        <Alternativa>
          s been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make 
          a type specimen book.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Alternativa>
        <Alternativa>It has survived not only five centuries, but also the leap 
          into electronic typesetting, remaining essentially unchanged.</Alternativa>
        <Alternativa> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Alternativa>
        <Alternativa> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Alternativa>
      </BoxAlternativas>
      <ContainerButton>
        <Button bgColor="#ffffff">Voltar</Button>
        <Button>Responder</Button>
      </ContainerButton>
    </Container>
  )
}

export default Simulado
