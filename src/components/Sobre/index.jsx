import React from 'react'
import {
    Container,
    Header,
    Content
} from "./styles"

const Sobre = () => {
  return (
    <Container> 
        <Header>
            <h1>Quem somos?</h1>
        </Header>
        <Content>
            <img src="FarolLogoFundoTransparente.png" alt="" />
            <h2>Farol treinamentos é uma organização que busca estimular a aquisição de conhecimentos por meio de capacitação dinâmica.</h2>
            <h2>Atendimento:</h2>
            <h3>WhatsApp: (44) 99905-7713</h3>
            <h3>Email: atendimento.faroltreinamentos@gmail.com</h3>
            <h3>Endereço: Rua Bahia, 740, Centro, Farol-PR</h3>
        </Content>
        
    </Container>
  )
}

export default Sobre