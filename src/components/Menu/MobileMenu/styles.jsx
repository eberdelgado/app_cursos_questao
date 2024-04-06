import styled from 'styled-components';
import { paleta1 } from "../../../entities/paleta";

export const Container = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: block;
  }
`;

export const MenuButton = styled.button`
  display: none;
  cursor: pointer;
    color: #ffffff;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 10px;
    padding: 5px;
    margin: 7px;
    margin-left: 20px;
    background-color: ${paleta1.AzulPrincipal};
    box-shadow: 0px 6px 3px rgb(0 0 0 / 50%);
    border: none;
    border-right: solid 1px ${paleta1.AzulPrincipal};

  @media (max-width: 850px) {
    display: flex;
    display: block;
  }
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  margin-left: 10px;
  background-color: ${paleta1.AzulPrincipal};
  position: absolute;
  top: 60px; /* Ajuste conforme necessário */
  left: 0;
  border-radius: 10px;
  //width: 100%;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

export const MenuItem = styled.li`
  padding: 10px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
