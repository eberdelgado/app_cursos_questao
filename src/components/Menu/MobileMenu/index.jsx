import React, { useState } from 'react';
import {
    Container,
    MenuButton,
    MenuList,
    MenuItem
} from './styles'
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { IoIosBusiness } from "react-icons/io";
import { CiLogin,CiLogout } from "react-icons/ci";
import { useUserContext } from '../../../hook/context/useUserContext';
import { useStageContext } from '../../../hook/context/useStageContext';

const MobileMenu= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {setMeusCursosStage} = useStageContext();
  const {isLog,logout} = useUserContext();

  const navigate = useNavigate();
  const handleClick = (index) => {
      stages[index](stagesName[index]);
      navigate(url[index]);
  };
  

  const stages =[()=>1+1, setMeusCursosStage,()=>1+1,()=>1+1,()=>1+1]
  const stagesName =[null,"containerCards"]
  const url = ["/","/meuscursos","/loja","/meuperfil","/sobre"]
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <MenuButton onClick={toggleMenu}>
        ☰ Menu
      </MenuButton>
      <MenuList isOpen={isMenuOpen}>
        <MenuItem onClick={()=>handleClick(0)}><FaHome/> - Home</MenuItem>
        {isLog && <MenuItem onClick={()=>handleClick(1)}><MdOutlineClass/> - Meus Cursos</MenuItem>}
        <MenuItem onClick={()=>handleClick(2)}><IoStorefrontSharp/> - Catálogo</MenuItem>
        <MenuItem onClick={()=>handleClick(4)}><IoIosBusiness/> - Sobre Nós</MenuItem>
      </MenuList>
    </Container>
  );
};

export default MobileMenu