import styled from "styled-components";
import { paleta1 } from "../../entities/paleta";


export const Container = styled.div`
    margin: 15px;
    width: 350px;
    height: 200px;
    background-color: white;
    box-shadow: 6px 6px 3px rgb(0 0 0 / 50%);
    border-radius: 10px 10px 10px 10px;
`;

export const Header = styled.div`
    height: 10%;
    width: 100%;
    
    border-radius: 10px 10px 0px 0px;
    background-color: ${paleta1.AzulClaro};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90%;
    width: 100%;
`;
export const LabelInfo = styled.div`
    padding-left: 10px;
`;

export const ButtonDetails= styled.button`
    background-color: ${paleta1.VerdeMusgo};
    width: 90%;
    margin-left: 5%;
    cursor: pointer;
`;

/*Paleta1
    AzulPrincipal: '#3498DB',
    AzulClaro: '#87CEEB',
    AzulEscuro: '#001f3f9d',
    VerdeAgua: '#00CED1',
    AmareloPalido: '#FFFF99',
    CinzaClaro: '#e9e9e9',
    RosaPalido: '#FFD1DC',
    LaranjaSuave: '#FFA07A',
    MarromClaro: '#D2B48C',
    VerdeMusgo: '#ADFF2F',
*/
