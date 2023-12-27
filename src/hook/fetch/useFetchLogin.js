import axios from "axios";
import { useState } from "react";
import {url} from './rotas'

export const useFetchLogin = () => {
    const login=async (user)=>{
        try{
            const response = await axios.post(url+"auth/",user)
            localStorage.setItem('token', response.data.token);
            return true
        }catch(error){
            console.error(error)
            return false
        }
        
    
     }

    return {
        login
    };
};

//localStorage.setItem('token', data.token);