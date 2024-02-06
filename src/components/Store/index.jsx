import React, { useEffect } from 'react'
import DivClose from "../DivClose/index"
import ContainerCards from './ContainerCards'
import { useStageContext } from '../../hook/context/useStageContext'
import StoreCursoDetails from './StoreCursoDetails';
import { useFetchCursos } from '../../hook/fetch/useFetchCursos';
import { useCursosContext } from '../../hook/context/useCursosContext';


const Store = () => {
  const {storeStage,modalCursoDetail,setModalCursoDetail} = useStageContext();
  const {setCursos} = useCursosContext();
  const {getCursos} = useFetchCursos();
  useEffect(()=>{
    loadCurso();
  },[])

  const loadCurso=async()=>{
    const response = await getCursos();
    setCursos(response);
  }

  const handleClick=()=>{
    setModalCursoDetail(!modalCursoDetail);
  }

  return (
    <>
      {storeStage==="containerCards" && <ContainerCards onClick={handleClick}/>}
      {modalCursoDetail&& <DivClose onClick={handleClick}/>}
      {modalCursoDetail && <StoreCursoDetails/>}
    </>
    
  )
}

export default Store

