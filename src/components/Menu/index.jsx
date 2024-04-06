import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Container,
    LabelOption,
    DivLogin,
    DivMenu,
    LabelImg
} from './styles'
import { FaHome } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { IoIosBusiness } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { CiLogin,CiLogout } from "react-icons/ci";
import { useStageContext } from '../../hook/context/useStageContext';
import { useUserContext } from '../../hook/context/useUserContext';

import  MobileMenu from './MobileMenu/index'


const Menu = (props) => {
    const [page] = useState(props.page);
    const {setMeusCursosStage} = useStageContext();
    const {isLog,logout} = useUserContext();

    const navigate = useNavigate();
    const handleClick = (index) => {
        stages[index](stagesName[index]);
        navigate(url[index]);
    };
    
    const handleLogin = () =>{
        navigate("/login")
    }

    const handleLogout = () =>{
        navigate("/")
        logout();
    }

    const stages =[()=>1+1, setMeusCursosStage,()=>1+1,()=>1+1,()=>1+1]
    const stagesName =[null,"containerCards"]
    const url = ["/","/meuscursos","/loja","/meuperfil","/sobre"]
    return (
        <Container>
            <MobileMenu/>
            <DivMenu>
            <LabelImg>
                    <img src="FarolLogoFundoTransparente.png" alt="" />
            </LabelImg>
                
                
            <LabelOption 
                onClick={()=>handleClick(0)}
                active={(page===0)}>
                <FaHome/><p> - Home</p>
            </LabelOption>
            {isLog && <LabelOption
                onClick={()=>handleClick(1)}
                active={(page===1)}>
                <MdOutlineClass/> <p>- Meus Cursos</p>
            </LabelOption>}
            <LabelOption  
                onClick={()=>handleClick(2)}
                active={(page===2)}>
                <IoStorefrontSharp/><p>- Catálogo</p>
            </LabelOption>
            {/*isLog && <LabelOption
                onClick={()=>handleClick(3)}
                active={(page===3)}>
                <ImProfile/> <p>- Meu Perfil</p>
            </LabelOption>*/}
            <LabelOption 
                onClick={()=>handleClick(4)}
                active={(page===4)}>
                <IoIosBusiness /> <p> - Sobre Nós</p>
            </LabelOption>
            </DivMenu>
            <DivLogin>
                {!isLog && <LabelOption onClick={handleLogin}>
                    <CiLogin /> <p>Entrar</p>
                </LabelOption>}
                {isLog && <LabelOption  onClick={handleLogout}>
                    <CiLogout /> <p>Sair</p>
                </LabelOption>}
            </DivLogin>
            
        </Container>
  )
}

export default Menu

