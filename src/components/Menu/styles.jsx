import styled from "styled-components";
import { paleta1 } from "../../entities/paleta";

export const Container = styled.div`
    background-color: ${paleta1.AzulEscuro};
    font-size: 18px;
    
    display: grid;
    grid-template-columns: 70% 30%;
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
    align-items: center;
    width: fit-content;
    border-radius: 10px;
    padding: 5px;
    margin: 7px;
    background-color: ${(props)=> props.active? paleta1.AzulPrincipal:"none"};
    box-shadow: ${(props)=> props.active? "0px 6px 3px rgb(0 0 0 / 50%)":"0px"};
    border-right: solid 1px ${paleta1.AzulPrincipal};
    p{
      margin: 0;
    }
`

 export const DivLogin = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: right;
  label{
    border-radius: 10px;
    cursor: pointer;
    padding: 5px;
    margin: 7px;
    border-right: solid 1px ${paleta1.AzulPrincipal};
    color: white;
  }
`

export const DivMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
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