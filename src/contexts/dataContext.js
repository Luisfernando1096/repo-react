// DataContext.js
import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

function DataContextProvider(props) {
    const [user, setUser] = useState(() => {
        // Intenta obtener el usuario del localStorage al cargar la aplicación
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        // Guarda el usuario en el localStorage cada vez que cambia
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const valor = { user, setUser };

    return (
        <DataContext.Provider value={valor}>
            {props.children}
        </DataContext.Provider>
    );
}

export { DataContextProvider };
