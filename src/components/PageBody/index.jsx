import React from 'react'
import {
    Page,
    Content,
} from './styles'
import Menu from '../Menu'

const PageBody = (props) => {
  return (
    <Page>
        <Menu page={props.page}/>
        <Content>
          {props.children}
        </Content>
    </Page>
  )
}

export default PageBody
