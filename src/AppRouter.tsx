import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { RoutesWithNotFound } from "./components"
import { ForgotPassword, Login, Register } from "./public"
import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}


export const AppRouter = ({ children }: Props) => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={'/login'} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/login" element={<Login />} />
                {children}
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}