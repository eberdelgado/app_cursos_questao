import axios from "axios";
import { useState } from "react";
import {url} from './rotas'

export const useFetchCursos = () => {
    const [Cursos, setCursos] = useState([]);
    
    
    const getCursos=()=>{
        axios.get(url+"cursos/")
            .then(response=>{
                console.log(response.data)
            }).catch(error =>{
                console.error(error)
            })
    }

    return {
        Cursos,setCursos,getCursos
    };
};