import React from 'react'
import Simulado from '../../components/Simulado'
import {SimuladoContextProvider} from '../../context/SimuladoContext'


const SimuladoPage = () => {
  return (
    <SimuladoContextProvider>
      <Simulado/>
    </SimuladoContextProvider>
  )
}

export default SimuladoPage
