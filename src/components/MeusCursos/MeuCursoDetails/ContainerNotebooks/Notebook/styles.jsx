import styled from "styled-components";
import { paleta1 } from "../../../../../entities/paleta";

export const Container = styled.div`
  display: flex;
  border: solid 1px;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  background-color:${paleta1.White};
  p{
        margin: 10px ;
    }
   button{
    height: fit-content;
  }
`