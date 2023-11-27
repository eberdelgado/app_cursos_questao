import styled from "styled-components";
import { paleta1 } from "../../../entities/paleta";
 

export const Container = styled.div`
background-color: ${paleta1.White};
width: 100%;
height: 95%;
margin-top: 0.5%;
margin-left: 1%;
border-radius: 10px;

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

export const Header=styled.div`
    width: 100%;
    height: 4%;
    border-radius: 10px 10px 0px 0px;
    background-color: ${paleta1.AzulClaro};
`;

export const Contents = styled.div`
  display: grid;
  grid-template-rows: auto 100%; 
  //border-bottom: solid 2px;
  width: 100%;
  //height: 80%;
`

export const InfoContents = styled.div`
  border-bottom: solid 1px;
  display: grid;
  grid-template-columns: 70% 30%;
`

export const DivInfo = styled.div`  
  margin: 10px 0px 10px 10px;
  p{
    margin-bottom: 2px;
    margin-top: 0px;
  }
`
export const DivButtonInfo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  button{
    background-color: ${paleta1.VerdeMusgo};
    padding: 10px;
    border-radius: 15px;
    height: fit-content;
  }

`

export const ContainerNotebooks = styled.div`

`

export const NoteBook = styled.div`
  border: solid 1px;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
   button{
    height: fit-content;
  }
`