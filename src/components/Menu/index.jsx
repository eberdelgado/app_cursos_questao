import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Container,
    LabelOption
} from './styles'
import { FaHome } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";



const Menu = (props) => {
    const [hoover, setHoover] = useState(0);
    const [page] = useState(props.page);

    const navigate = useNavigate();

    const handleClick = (url) => {
      navigate(url);
    };
  

    const handleMouseEnter= (id) =>{
        setHoover(id);
    }

    const handleMouseLeave =()=>{
        setHoover(-1);
    }

    const icons = [<FaHome/>,<MdOutlineClass/>,<IoStorefrontSharp/>,<ImProfile/>];
    const menus = ["- Home","- Meus Cursos","- Loja","- Meu Perfil"];
    const url = ["/","/meuscursos","/loja","/meuperfil"]
    return (
        <Container>
            {icons.map((i,index)=>
                <LabelOption 
                    onMouseEnter={()=>handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={()=>handleClick(url[index])}
                    active={(hoover===index) || (page===index)}>
                    
                        {icons[index]}{(hoover===index) || (page===index)?menus[index]:""}
                </LabelOption>
            )}
        </Container>
  )
}

export default Menu
