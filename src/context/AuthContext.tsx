import type React from "react";
import type { LoginResponse } from "../models";
import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
    user: LoginResponse | null,
    setUser: React.Dispatch<React.SetStateAction<LoginResponse | null>>
}

interface AuthProps {
    children: ReactNode
}

const authContext = createContext<AuthContextType>({
    user: null,
    setUser: () => { }
})

export const useGlobalContext = () => {
    const context = useContext(authContext)

    if (!context) {
        throw new Error("AuthContext must be used within a AuthContextProvider")
    }

    return context

}

//CREACION DEL PROVIDER

//OBTENIENDO USER DEL LOCALSTORAGE
let currentUser: LoginResponse | null = JSON.parse(localStorage.getItem("user") || "{}") || null

if (!currentUser) {
    currentUser = null
}


export const AuthContextProvider = ({ children }: AuthProps) => {
    const [user, setUser] = useState<LoginResponse | null>(currentUser)
    return (
        <authContext.Provider value={{ user, setUser }}  > {children} </authContext.Provider>
    )
}