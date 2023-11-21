import styled from "styled-components";
//import { paletaSuave } from "../../entities/paleta";

export const paletaAzul = {
    AzulPrincipal: '#3498DB',
    AzulClaro: '#87CEEB',
    AzulEscuro: '#001F3F',
    VerdeÁgua: '#00CED1',
    AmareloPálido: '#FFFF99',
    CinzaClaro: '#D3D3D3',
    RosaPálido: '#FFD1DC',
    LaranjaSuave: '#FFA07A',
    MarromClaro: '#D2B48C',
    VerdeMusgo: '#ADFF2F',
  }

  

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
overflow: auto;
align-items: flex-start;
align-content: flex-start;
background-color: ${paletaAzul.CinzaClaro};
width: 100%;
height: 100%;
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
background-color: ${paletaAzul.CinzaClaro}; /* Cor da trilha da barra de rolagem */
border-radius: 6px; /* Borda arredondada da trilha */
}

&::-webkit-scrollbar-thumb:hover {
background-color: #555; /* Cor do "polegar" ao passar o mouse sobre ele */
}
`;
