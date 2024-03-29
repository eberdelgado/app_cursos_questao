import React from 'react'
import { 
    Container, 
    Header,
    DivButton,
    Contents
} from './styles'
import Notebook from './Notebook'
import { useCursosContext } from '../../../../hook/context/useCursosContext'



const ContainerNotebooks = () => {
  const {cursoDetails} =useCursosContext()

  
  const renderNotebooks=()=>{
    try{
      return (
        cursoDetails.cursos.caderno.map((c)=>( <Notebook caderno={c}/>))
      )
    }catch(error){
      return (<p>Nenhum cardeno encontrado</p>)
    }
  }
  return (
    <Container>
          <Header>
            <p>Meus cadernos(2):</p>  
            {/*<DivButton>
                <button>Criar caderno</button>
            </DivButton>*/}
          </Header>
          <Contents>
            {renderNotebooks()}                    
          </Contents>         
    </Container>
  )
}

export default ContainerNotebooks
