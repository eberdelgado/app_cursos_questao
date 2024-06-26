import styled from "styled-components";
import { paletaSuave,paleta1 } from "../../entities/paleta";
/*const paletaSuave = {
    corPrincipal: '#8ac4d0',   // Azul Pastel
    corSecundaria: '#f8eceb',  // Rosa Pálido
    corDestaque: '#b5d8a6',    // Verde Pastel
    corFundo: '#f0f0f0',       // Cinza Claro
    corTexto: '#333333',       // Preto
    corErrado :'#ff7f7f',      // Vermelho
  };
*/



export const Container = styled.div`

    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${paletaSuave.corFundo};
    overflow-y: auto;
    //display: block;
    //height: 100vh; 
    padding-bottom: 10px;
    height: 100vh;
    &::-webkit-scrollbar {
width: 12px; /* Largura da barra de rolagem vertical */
}

&::-webkit-scrollbar-thumb {
background-color: #888; /* Cor do "polegar" (a parte que você arrasta) */
border-radius: 6px; /* Borda arredondada do "polegar" */
}

&::-webkit-scrollbar-track {
background-color: ${paleta1.CinzaClaro}; /* Cor da trilha da barra de rolagem */
border-radius: 6px; /* Borda arredondada da trilha */
}

&::-webkit-scrollbar-thumb:hover {
background-color: #555; /* Cor do "polegar" ao passar o mouse sobre ele */
}
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
export const HeaderLabel = styled.div`
    display: flex;
    justify-content: center;
    div{
        margin-left: 10px;
        cursor: pointer;
        
    }
`;
export const Enunciado = styled.div`
    font-size: 22px;
    margin: 15px;
    margin-top: 0px;
    padding: 0.7rem;
    border-bottom: solid 1.5px;
    //font-weight: bold;
    text-align: justify;
`;

export const BoxAlternativas = styled.div`
    margin: 15px;
    border-bottom: solid 1.5px;
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    padding-bottom: 20px;
`;

export const Alternativa = styled.div`
    cursor: pointer;
    border: ${(props)=> props.correct===1?"solid 1.5px green":
                        props.correct===2?"solid 1.5px red":"solid 1px"};
    text-align: center;
    border-radius: 20px;
    padding: 0.5rem;
    margin: 15px;
    box-shadow: ${(props)=> props.select?"4px 4px 2px rgb(0 0 0 / 50%)":"8px 8px 4px rgb(0 0 0 / 50%)"};
    background-color: ${(props)=>  props.correct===1?paletaSuave.corDestaque:
                                    props.correct===2?paletaSuave.corErrado:  
                                    props.select ? paletaSuave.corPrincipal :paletaSuave.corSecundaria};
`;


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
`;

export const ContainerComentario = styled.div`
    margin: 15px;
    border-top: solid 1.5px;
    padding: 0.7rem;
`

export const InputNumeroQuestao = styled.input`
    width: 50px;
    font-size: 18px;
    font-family: serif;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 2px;
`