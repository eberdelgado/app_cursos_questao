import { createContext, useState} from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [myUser,setMyUser]= useState(userMok); 

    return (
        <UserContext.Provider
        value={{
            myUser,setMyUser
                }}
        >
        {children}
        </UserContext.Provider>
    );
};

const userMok={
    id: 123,
    name:"Usuario 10",
    email:"email@email.com",
    cellphone:"44 987414563",
    address:{
        rua:"Street",
        bairro:"Bairro",
        cidade:"Cidade",
        estado:"Estado",
        cep:87456000,
    }

}