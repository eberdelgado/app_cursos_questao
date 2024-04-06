import React from 'react'
import {
    Container,
    ImgDesktop,
    ImgMobile
} from "./styles"

const Home = () => {
  return (
    <Container> 
      <ImgDesktop src="home.png" alt="" />
      <ImgMobile src="homeMobile.png" alt=""/>
    </Container>
  )
}

export default Home