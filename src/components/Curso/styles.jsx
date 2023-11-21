import styled from "styled-components";

export const paletaAzul = {
    AzulPrincipal: '#3498DB',
    AzulClaro: '#87CEEB',
    AzulEscuro: '#001F3F',
    VerdeAgua: '#00CED1',
    AmareloPalido: '#FFFF99',
    CinzaClaro: '#D3D3D3',
    RosaPalido: '#FFD1DC',
    LaranjaSuave: '#FFA07A',
    MarromClaro: '#D2B48C',
    VerdeMusgo: '#ADFF2F',
  }

export const Container = styled.div`
    //border: solid 1px;
    margin: 15px;
    width: fit-content;
    
    height: 200px;
    background-color: white;
    box-shadow: 6px 6px 3px rgb(0 0 0 / 50%);
    border-radius: 10px 10px 10px 10px;
`;

export const Header = styled.div`
    height: 10%;
    width: 100%;
    
    border-radius: 10px 10px 0px 0px;
    background-color: ${paletaAzul.AmareloPalido};
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
`