import { createContext, useState } from 'react'

export const DataContext = createContext();

function DataContextProvider(props) {
    const [user, setUser] = useState(null);
    const valor = { user, setUser };

    return (
        <DataContext.Provider value={valor}>
            {props.children}
        </DataContext.Provider>
    );

}

export { DataContextProvider }