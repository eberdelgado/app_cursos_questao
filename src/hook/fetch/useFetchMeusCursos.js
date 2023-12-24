import axios from "axios";
import { useState } from "react";
import {url} from './rotas'

export const useFetchMeusCursos = () => {
    const [meusCursos, setMeusCursos] = useState([]);
    
    
    const getMeusCursos=()=>{
        axios.get(url+"meuscursos/")
            .then(response=>{
                console.log(response.data)
            }).catch(error =>{
                console.error(error)
            })
    }

    return {
        meusCursos, setMeusCursos,getMeusCursos
    };
};