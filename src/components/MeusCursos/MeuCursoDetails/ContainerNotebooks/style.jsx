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


overflow: auto;
background-color: ${paletaAzul.CinzaClaro};
width: 98%;
height: 50%;
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
    background-color: ${paletaAzul.VerdeMusgo};
    padding: 10px;
    border-radius: 15px;
    height: fit-content;
    }
    
`

export const Notebook = styled.div`
  display: flex;
  border: solid 1px;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  background-color: white;
  p{
        margin: 10px ;
    }
   button{
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
    background-color: ${paletaAzul.AmareloPálido};
    padding: 10px;
    border-radius: 15px;
    height: fit-content;
  }

`