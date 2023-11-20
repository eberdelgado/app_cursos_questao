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
    background-color: ${paletaAzul.CinzaClaro};
    width: 98%;
    height: 96%;
    margin-top: 0.5%;
    margin-left: 1%;
`;
