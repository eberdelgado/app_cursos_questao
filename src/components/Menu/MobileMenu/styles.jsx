import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #333;
  position: absolute;
  top: 60px; /* Ajuste conforme necessário */
  left: 0;
  width: 100%;
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
