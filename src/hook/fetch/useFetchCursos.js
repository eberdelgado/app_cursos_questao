import axios from "axios";
import { useState } from "react";
import {url} from './rotas'

export const useFetchCursos = () => {
       
    const getCursos=async()=>{
        try{
            const response = await axios.get( url+`cursos/?format=json`)
            return response.data
        }catch(error){
            console.error(error);
            return null;
        }
    }

    return {
        getCursos
    };
};

//localStorage.setItem('token', data.token);