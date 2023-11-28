import React from 'react'
import PageBody from '../../../components/PageBody'
import MeusCrusos from '../../../components/MeusCursos'
import { CursosContextProvider } from '../../../context/CursosContext'

const MeusCursosPage = () => {
  return (
      <CursosContextProvider>
        <PageBody page={1}>
            <MeusCrusos/>
        </PageBody>
      </CursosContextProvider>
  )
}

export default MeusCursosPage
