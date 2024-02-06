import styled from "styled-components";
import { paleta1 } from "../../../../entities/paleta";

export const Container = styled.div`
overflow: hidden;
//background-color: ${paleta1.CinzaClaro};
width: 98%;
margin-top: 0.5%;
margin-left: 1%;

`
export const Header = styled.div`
background-color: white;
    border-bottom: solid 1px;
    display: grid;
    grid-template-columns: 70% 30%;
    p{
        margin: 10px ;
    }
    button{
    background-color: ${paleta1.VerdeMusgo};
    padding: 10px;
    border-radius: 15px;
    height: fit-content;
    }
    
`
export const DivButton = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 5px;
  button{
    background-color: ${paleta1.AmareloPálido};
    padding: 10px;
    border-radius: 15px;
    height: fit-content;
  }

`


export const Contents = styled.div`
  overflow: auto;
  background-color: ${paleta1.CinzaClaro};
  height: 80%;
  margin-top: 0.5%;
  margin-left: 1%;

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