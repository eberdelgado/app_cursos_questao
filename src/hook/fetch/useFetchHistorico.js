import axios from "axios";
import { useState } from "react";
import { url } from "./rotas";

export const useFetchHistorico = ()=>{
    const auth = {'Authorization': `Token ${localStorage.getItem('token')}`}
    const user = localStorage.getItem('user');
    const getHistorico = async(id)=>{
        try{
            const response = await axios.get(
                url + `historico/?caderno=${id}`,
                {headers: auth,}
                )
            return response.data;

        }catch(error){
            console.error(error);
            return null;
        }
    }
   
    const createHistorico = (obj)=>{
        try{
            axios.post( 
                url + `historico/`,
                {
                    user: parseInt(user),
                    ...obj,
                },
                {headers: auth,}
                )
        }catch(error){
            console.error(error);
        }
    }
    const updateHistorico = (id,obj)=>{
        try{
            axios.put( 
                url + `historico/${id}/`,
                {
                    user: parseInt(user),
                    ...obj,
                },
                {headers: auth,}
                )
        }catch(error){
            console.error(error);
        }
    }

    return {
        getHistorico,
        createHistorico,
        updateHistorico
    };

}