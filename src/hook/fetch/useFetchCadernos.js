import axios from 'axios'
import { url } from './rotas'
import { useState } from 'react'

export const useFetchCadernos = () => {
    const [loading, setLoading] = useState(false); 
    const auth = {'Authorization': `Token ${localStorage.getItem('token')}`}
    
    const getCaderno= async(id)=>{
        try{
            setLoading(true);
            const response = await axios.get( url+`cadernos/${id}/`,{
                headers: auth  
            })
            setLoading(false)
            return response.data 
        }catch(error){
            console.error(error);
            return null
        }

     }
  
    return {
        loading, setLoading,
        getCaderno
    }
}

