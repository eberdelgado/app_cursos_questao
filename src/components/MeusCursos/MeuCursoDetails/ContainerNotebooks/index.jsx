import React from 'react'
import { 
    Container, 
    Header,
    DivButton,
    Contents
} from './styles'
import Notebook from './Notebook'



const ContainerNotebooks = () => {

  return (
    <Container>
          <Header>
            <p>Meus cadernos(2):</p>  
            <DivButton>
                <button>Criar caderno</button>
            </DivButton>
          </Header>

          <Contents>
            <Notebook/>
            <Notebook/>
            <Notebook/>
            <Notebook/>
            <Notebook/>
            <Notebook/>
            <Notebook/>
          </Contents>         
    </Container>
  )
}

export default ContainerNotebooks
