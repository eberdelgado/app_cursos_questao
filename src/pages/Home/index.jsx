import React from 'react'
import Simulado from '../../components/Simulado'
import {SimuladoContextProvider} from '../../context/SimuladoContext'


const home = () => {
  return (
    <SimuladoContextProvider>
      <Simulado/>
    </SimuladoContextProvider>
  )
}

export default home
