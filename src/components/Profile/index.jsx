import React, { useState } from 'react'
import {
    Container,
    Address,
    Contact,
    Form,
} from './styles'
import { useUserContext } from '../../hook/context/useUserContext'

const Profile = () => {
  const {myUser,setMyUser}= useUserContext();
  const [user,setUser]=useState(myUser);
  const [address, setAddress] = useState(myUser.address);

  const handleChangeUser = (name, value)=>{
    setUser({ 
            ...user,
            [name]:value
          });
  } 
  
  const handleChangeAddress = (name, value)=>{
    setAddress({ 
            ...address,
            [name]:value
          });
  }

  return (
    <Container>
      <h1>Meu Perfil</h1> 
      <Form>
        <label >Nome:</label>
        <input name="name" type="text" value={user.name} onChange={(e)=> handleChangeUser(e.target.name,e.target.value)}/>
        <label>Email:</label>
        <input name="email" type="email" value={user.email} onChange={(e)=> handleChangeUser(e.target.name,e.target.value)}/>
        <label>Celular:</label>
        <input name="cellphone" type="phone" value={user.cellphone} onChange={(e)=> handleChangeUser(e.target.name,e.target.value)}/>
        <label>Cep:</label>
        <input name="cep" type="text" value={address.cep} onChange={(e)=> handleChangeAddress(e.target.name,e.target.value)}/>
        <label>Rua:</label>
        <input name="rua" type="text" value={address.rua} onChange={(e)=> handleChangeAddress(e.target.name,e.target.value)}/>
        <label>Cidade:</label>
        <input name="cidade" type="text" value={address.cidade} onChange={(e)=> handleChangeAddress(e.target.name,e.target.value)}/>
        <label>Bairro:</label>
        <input name="bairro" type="text" value={address.bairro} onChange={(e)=> handleChangeAddress(e.target.name,e.target.value)}/>
        <label>Estado:</label>
        <input name="estado" type="text" value={address.estado} onChange={(e)=> handleChangeAddress(e.target.name,e.target.value)}/>
      </Form>
      <button>Salvar</button>
      <button>Alterar senha</button>
      
    </Container>
  )
}

export default Profile
