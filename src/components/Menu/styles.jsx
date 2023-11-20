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
    background-color: ${paletaAzul.AzulPrincipal};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    //border-right: solid 2px;
    box-shadow: 6px 6px 3px rgb(0 0 0 / 50%);
    //margin-top: 10px;
    //margin-bottom: 10px;
    margin: 10px 0px 10px 10px;
    padding-top: 10%;
    border-radius: 10px 00px 00px 10px;
`;


export const LabelOption = styled.label`
    //border: solid 1px;
    width: 80%;
    border-radius: 50px;
    padding: 5%;
    margin-bottom: 10%;
    background-color: ${paletaAzul.VerdeÁgua};
    box-shadow: 6px 6px 3px rgb(0 0 0 / 50%);
`