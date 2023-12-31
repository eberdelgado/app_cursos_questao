import styled from "styled-components";
import { paleta1 } from "../../entities/paleta";

export const Container = styled.div`
    background-color: ${paleta1.AzulEscuro};
    font-size: 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 6px 6px 3px rgb(0 0 0 / 50%);
    margin: 10px 10px 10px 10px;
    border-radius: 10px 10px 00px 00px;
    height: 7vh;
`;


export const LabelOption = styled.label`
    //border: solid 1px;
    cursor: pointer;
    color: #ffffff;
    display: flex;
    justify-content: center;
    width: ${(props)=> (props.active?"fit-content":"fit-content")};
    border-radius: 10px;
    padding: 5px;
    margin: 7px;
    background-color: ${paleta1.AzulPrincipal};
    box-shadow: 6px 6px 3px rgb(0 0 0 / 50%);
`

/*Paleta1
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
  }*/