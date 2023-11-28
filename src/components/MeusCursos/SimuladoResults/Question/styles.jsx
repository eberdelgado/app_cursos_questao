import styled from "styled-components";
import { paleta1,paletaSuave } from "../../../../entities/paleta";


export const Container = styled.div`
    font-size: 20px;
    font-family: serif;
    background-color: ${paletaSuave.corFundo};
    display: block;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    margin: 1rem;
    margin-bottom: 0px ;
    border-bottom: solid 2px;
    > *:not(:last-child) {
            border-right: 1px solid #000; 
        }
`;

export const Informacoes = styled.div`
    font-size: 15px;
    margin: 15px;
    margin-bottom: 0px ;
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    border-bottom: solid 1px;
    > *:not(:last-child) {
        border-right: 1px solid #000; 
     }
    
`;


export const InfoLabel = styled.label`
    padding-left: 0.5rem;
`;
export const HeaderLabel = styled.label`
    padding-left: 0.5rem;
`;
export const Enunciado = styled.div`
    margin: 15px;
    margin-top: 0px;
    padding: 0.7rem;
    border-bottom: solid 1.5px;
`;

export const BoxAlternativas = styled.div`
    margin: 15px;
    border-bottom: solid 1.5px;
`;


export const Alternativa = styled.div`
    border: ${(props)=> props.correct===1?"solid 1.5px green":
                        props.correct===2?"solid 1.5px red":"solid 1px"};
    text-align: center;
    border-radius: 20px;
    padding: 0.5rem;
    margin: 15px;
    background-color: ${(props)=>  props.correct===1?paletaSuave.corDestaque:
                                    props.correct===2?paletaSuave.corErrado:  
                                    paletaSuave.corSecundaria};
`;
