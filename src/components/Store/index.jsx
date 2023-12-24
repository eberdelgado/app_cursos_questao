import React, { useEffect } from 'react'
import ContainerCards from './ContainerCards'
import { useStageContext } from '../../hook/context/useStageContext'
import StoreCursoDetails from './StoreCursoDetails';
import { useFetchCursos } from '../../hook/fetch/useFetchCursos';


const Store = () => {
  const {storeStage,modalCursoDetail} = useStageContext();
  const {cursos,getCursos} = useFetchCursos();
  useEffect(()=>{
    getCursos();
  },[])
  console.log(cursos)
  return (
    <>
      {storeStage==="containerCards" && <ContainerCards/>}
      {modalCursoDetail &&  <StoreCursoDetails/>}
    </>
    
  )
}

export default Store

