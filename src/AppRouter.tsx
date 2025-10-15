import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { RoutesWithNotFound } from "./components"
import { Login } from "./public"
import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}


export const AppRouter = ({ children }: Props) => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={'/login'} />} />
                <Route path="/login" element={<Login />} />
                {children}
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}