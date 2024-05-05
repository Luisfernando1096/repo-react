import { createContext, useState } from "react";
import React from 'react'

export const AuthContext = createContext()

function AuthProvider({children}) {
    //const [user, setUser] = useState(null);
    const [user, setUser] = useState(null);

    const contexValue = {
        user, 
        setUser,
    }

    return (
        <AuthContext.Provider value={contexValue}>
            {children}
        </AuthContext.Provider>
        
    )
}

export { AuthProvider }