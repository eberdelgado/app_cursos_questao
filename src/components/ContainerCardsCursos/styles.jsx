import styled from "styled-components";
import { paleta1 } from "../../entities/paleta";

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: #ffff;
    margin: 10px;
    width: 95%;
`

export const ContainerCursos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: auto;
    align-items: flex-start;
    align-content: flex-start;
    background-color: ${paleta1.CinzaClaro};
    width: 100%;
    flex:1;
    
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

export const Header = styled.div`
    display: flex;
    justify-content: center;
`


