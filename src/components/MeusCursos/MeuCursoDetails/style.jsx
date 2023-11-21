import styled from "styled-components";

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
    White:'#fff'
  }

  

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
overflow: auto;
align-items: flex-start;
align-content: flex-start;
background-color: ${paletaAzul.White};
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
background-color: ${paletaAzul.CinzaClaro}; /* Cor da trilha da barra de rolagem */
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
    background-color: ${paletaAzul.AzulClaro};
`;

export const Contents = styled.div`

`

export const InfoContents = styled.div`

`

export const ContainerNotebooks = styled.div`
`