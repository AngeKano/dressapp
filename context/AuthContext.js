
import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [nom, setNom] = useState("");
  const [numero, setNumero] = useState();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  

  return (
    <AuthContext.Provider value={{nom,numero, email, pwd, setNom,setNumero,setEmail,setPwd}}>
        {children}
    </AuthContext.Provider>
  )
}
