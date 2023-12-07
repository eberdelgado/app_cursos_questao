import React from 'react'
import ContainerCards from './ContainerCards'
import { useStageContext } from '../../hook/context/useStageContext'
import StoreCursoDetails from './StoreCursoDetails';


const Store = () => {
  const {storeStage,modalCursoDetail} = useStageContext();
  return (
    <>
      {storeStage==="containerCards" && <ContainerCards/>}
      {modalCursoDetail &&  <StoreCursoDetails/>}
    </>
    
  )
}

export default Store

