import React from 'react'
import {
    Page,
    Content,
} from './styles'
import MeusCursos from '../MeusCursos'
import Menu from '../Menu'

const PageBody = () => {
  return (
    <Page>
        <Menu/>
        <Content>
          <MeusCursos/>
        </Content>
    </Page>
  )
}

export default PageBody
