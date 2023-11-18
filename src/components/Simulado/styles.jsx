import styled from "styled-components";

const paletaSuave = {
    corPrincipal: '#8ac4d0',   // Azul Pastel
    corSecundaria: '#f8eceb',  // Rosa Pálido
    corDestaque: '#b5d8a6',    // Verde Pastel
    corFundo: '#f0f0f0',       // Cinza Claro
    corTexto: '#333333',       // Preto
  };


export const Container = styled.div`
    font-size: 20px;
    font-family: serif;
    background-color: ${paletaSuave.corFundo};
    display: block;
    //height: 100vh; 
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

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
`;

export const Alternativa = styled.div`
    border: solid 1px;
    border-radius: 20px;
    padding: 0.5rem;
    margin: 15px;
    box-shadow: 8px 8px 4px rgb(0 0 0 / 50%);
`;


export const Button = styled.button`
    font-size: 20px;
    font-family: serif;
    height: 45px;
    border-radius: 15px;
    border: solid 0px;
    background-color: ${(props) => props.bgColor || paletaSuave.corDestaque};
    box-shadow: 4px 4px 4px rgb(0 0 0 / 50%);
    margin-left: 0.9rem;
`;
