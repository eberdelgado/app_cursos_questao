import styled from "styled-components";
import { paleta1 } from "../../entities/paleta";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    

    @media (max-width: 1000px) {
        overflow: auto;
    }
    &::-webkit-scrollbar {
width: 12px; /* Largura da barra de rolagem vertical */
}

&::-webkit-scrollbar-thumb {
background-color: #888; /* Cor do "polegar" (a parte que você arrasta) */
border-radius: 6px; /* Borda arredondada do "polegar" */
}

&::-webkit-scrollbar-track {
background-color: ${paleta1.CinzaClaro}; /* Cor da trilha da barra de rolagem */
border-radius: 6px; /* Borda arredondada da trilha */
}

&::-webkit-scrollbar-thumb:hover {
background-color: #555; /* Cor do "polegar" ao passar o mouse sobre ele */
}
    
`

export const ImgDesktop = styled.img`
    width: 100%;
    height: 100%;
    //display: flex;
    @media (max-width: 1000px) {
        display: none;
    }
`

export const ImgMobile = styled.img`
    width: 100%;
    //height: 100%;
    //display: flex;
    @media (min-width: 1000px) {
        display: none;
    }
`