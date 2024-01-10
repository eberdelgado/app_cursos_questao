import React, { useState } from 'react';
import {
    Container,
    MenuButton,
    MenuList,
    MenuItem
} from './styles'

const MobileMenu= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <MenuButton onClick={toggleMenu}>
        ☰ Menu
      </MenuButton>
      <MenuList isOpen={isMenuOpen}>
        <MenuItem onClick={toggleMenu}>Item 1</MenuItem>
        <MenuItem onClick={toggleMenu}>Item 2</MenuItem>
        <MenuItem onClick={toggleMenu}>Item 3</MenuItem>
      </MenuList>
    </Container>
  );
};

export default MobileMenu