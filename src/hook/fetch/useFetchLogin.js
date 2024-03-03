import axios from "axios";
import { useState } from "react";
import {url} from './rotas'

export const useFetchLogin = () => {
    


    const login=async (user)=>{
        try{
            const response = await axios.post(url+"auth/",user)
            console.log(response);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.user_id);
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