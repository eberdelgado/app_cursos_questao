import styled from "styled-components";
import { paleta1 } from "../../entities/paleta";

export const Container = styled.div`
    background-color: white;
    margin: 1.0%;
    width: fit-content;
    border-radius: 0px 0px 10px 10px;
    padding-left: 15px;
    padding-right: 15px;
    input{
        width: 300px;
        height: 30px;
        margin-left: 2px;
        margin-bottom: 5px;
        border-radius: 5px;
    }
    overflow: auto;


    
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
   
`;

export const Address = styled.div`
`

export const Contact = styled.div`

`

export const Form = styled.div`
display: grid;

`