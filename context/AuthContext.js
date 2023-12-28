
import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [nom, setNom] = useState("Inconnu.e");

  return (
    <AuthContext.Provider value={{nom, setNom}}>
        {children}
    </AuthContext.Provider>
  )
}
