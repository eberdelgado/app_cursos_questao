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

export const Page = styled.div`
    display: grid;
    grid-template-columns: 15% 85%; 
    height: 100vh;
`;

export const Content = styled.div`
    background-color: ${paletaAzul.AzulClaro};
    //margin-top: 10px;
    //margin-bottom: 10px;
    margin: 10px 10px 10px 5px;
    box-shadow: 6px 6px 3px rgb(0 0 0 / 50%);
    border-radius: 0px 10px 10px 0px;
    height: 97vh;
`;
