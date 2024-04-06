import { useFetchLogin } from '../../hook/fetch/useFetchLogin'
import { useNavigate } from 'react-router-dom';
import {
    Image,
    Container,
    FormLogin,
    DivRight,
    PError
} from './styles'
import { useState } from 'react'
import { useUserContext } from '../../hook/context/useUserContext'

const Login = () => {
    const {login} = useFetchLogin()
    const {logout,setIsLog} = useUserContext()
    const [nome, setNome]=useState("")
    const [loginFailed, setLoginFailed] = useState(false)
    const [password,setPassword] = useState("")
    

    const navigate = useNavigate();

    const handleSubmit =async (e)=>{
        e.preventDefault()
        const resultadoLogin = await login({
            "username":nome,
            "password":password
        })
        
     if (resultadoLogin){
        setIsLog(true)
        navigate("/")
     } else{
        setLoginFailed(true)
     }
     
    }

    return (
        <Container>
            <div>
                <Image src="farol.jpg" alt="" />
            </div>
            
            <DivRight>
                <h1>Farol Treinamentos</h1>
                <FormLogin>
                    <label>Nome de Usuário:</label>
                    <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                    <label>Senha:</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {loginFailed && <PError>Usuário ou senha errados, tente novamente!</PError>}
                    <button onClick={handleSubmit}>Entrar</button>
                    
                    {//<p>Registrar-se</p>
                    }
                </FormLogin>
            </DivRight>
        </Container>
      
    )
  }
  
  export default Login