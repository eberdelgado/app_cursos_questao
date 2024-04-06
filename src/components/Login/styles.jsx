import styled from "styled-components";


export const Image = styled.img`
    //width: 50vw;
    height: 100vh;
    @media (max-width: 750px){
        display: absolute;
        transform: translate(-30%, 00%);
    }
`
export const Container = styled.div`
   // display: flex;
   @media (min-width: 1000px){
    display: flex;
   }
`
export const DivRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    width: 100vw;
    //z-index: 1000;
    @media (max-width: 1000px){
        display: absolute;
        top: 0%;
        left: 0%;
        color: aliceblue;
        transform: translate(00%, -200%);
    }
`

export const FormLogin =styled.form`
    max-width: 300px;
    //margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: black;

    input {
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        box-sizing: border-box;
        }
    button {
        background-color: #4caf50;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        width: 100%;
    }
   
`

export const PError = styled.p`
    color: red;
`