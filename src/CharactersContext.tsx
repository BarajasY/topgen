import { createContext, useState } from "react";
import { DataInterface, ChildrenInterface } from "./types";

const Context = createContext({})

export const ContextProvider = ({children}:ChildrenInterface) => {
    const [Characters, setCharacters] = useState<DataInterface[]>([])

    return (
        <Context.Provider value={{Characters, setCharacters}}>
            {children}
        </Context.Provider>
    )
}

export default Context