import React from 'react'
import {
    Container,
    Button
}from "./styles"
import DivClose from '../../DivClose'

const Modal = (props) => {
  return (
    <>
        <DivClose onClick={props.ModalClose}/>
        <Container>
            <h2>
                {props.texto}
            </h2>
            <div>
                <Button bgcolor={"#D3D3D3"} onClick={props.handle1}> {props.valueB1}</Button>
                <Button onClick={props.handle2}>{props.valueB2}</Button>
            </div>
            

        </Container>
        
    </>
    
  )
}

export default Modal