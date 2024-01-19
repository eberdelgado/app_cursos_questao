import styled from "styled-components";
import { paleta1 } from "../../../entities/paleta";

export const Container = styled.div`
    position: fixed;
    transform: translate(0vh,5vw);
    background-color: #fdfdfd;
    width: auto;
    height: fit-content;
    border-radius: 10px 10px 10px 10px;
    
`

export const Header = styled.div`
    height: 20px;
    width: 100%;
    
    border-radius: 10px 10px 0px 0px;
    background-color: ${paleta1.AzulClaro};
`;
export const Contents = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
`