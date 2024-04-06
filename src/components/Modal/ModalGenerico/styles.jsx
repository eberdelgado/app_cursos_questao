import styled from "styled-components";
import { paletaSuave } from "../../../entities/paleta";


export const Container = styled.div`
    position: fixed;
    transform: translate(30vw,20vh);
    padding-bottom: 20px;
    background-color: #fdfdfd;
    width: 40vw;
    height: auto;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    div{
        display: flex;
        justify-content: center;
    }
    h2{
        text-align: center;
    }
    @media (max-width: 700px) {
        width: 80vw;
        padding-right: 15px;
        transform: translate(10vw,20vh);
    }
    
`
export const Button = styled.button`
    font-size: 20px;
    font-family: serif;
    height: 45px;
    border-radius: 15px;
    border: solid 0px;
    background-color: ${(props) => props.bgcolor || paletaSuave.corDestaque};
    box-shadow: 4px 4px 4px rgb(0 0 0 / 50%);
    margin-left: 0.9rem;
    cursor: pointer;
`