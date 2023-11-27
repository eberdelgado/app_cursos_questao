import React from 'react'
import Simulado from '../../components/Simulado'
import {SimuladoContextProvider} from '../../context/SimuladoContext'
import { CursosContextProvider } from '../../context/CursosContext'


const SimuladoPage = () => {
  return (
    <SimuladoContextProvider>
      <CursosContextProvider>
        <Simulado/>
      </CursosContextProvider>     
    </SimuladoContextProvider>
  )
}

export default SimuladoPage
