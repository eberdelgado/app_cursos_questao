import axios from "axios";
import { useState } from "react";
import {url} from './rotas'

export const useFetchMeusCursos = () => {
    const [meusCursosLoad, setMeusCursosLoad] = useState([]);
    const auth = {'Authorization': `Token ${localStorage.getItem('token')}`}
    const getMeusCursos=()=>{
        axios.get(url+"meuscursos/",{
           
            headers: auth/*{
                'Authorization': `Token ${localStorage.getItem('token')}`
            }*/
        })
            .then(response=>{
                setMeusCursosLoad(response.data)
            }).catch(error =>{
                console.error(error)
            })
    }

    const getCursoDetails=async(id)=>{
        try{
            const response = await axios.get( url+`meuscursos/${id}/?format=json`,{
                headers: auth,
            })
            
            return response.data
        }catch(error){
            console.error(error);
            return false
        }
    }


    return {
        meusCursosLoad,getMeusCursos,getCursoDetails
    };
};