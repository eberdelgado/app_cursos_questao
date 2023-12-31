import styled from "styled-components";
import {paleta1} from "../../../entities/paleta"

export const Container = styled.div`
    background-color: ${paleta1.White};
    height: 95%;
    width: 100%;
    margin-top: 0.5%;
    margin-left: 1%;
    border-radius: 10px;
    overflow: auto;
`;

export const Header = styled.div`
    border-bottom: solid 2px ;
    margin-left: 15px;
    text-align: center;
`
export const ContainerButton = styled.div`
    border-bottom: solid 1px;
    border-top: solid 1px;
    padding: 5px;
    //background-color: aliceblue;
`

/*
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
*/