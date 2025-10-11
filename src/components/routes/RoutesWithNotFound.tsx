import type { ReactNode } from "react"
import { Navigate, Route, Routes } from 'react-router-dom'

interface Props {
    children: ReactNode
}

export const RoutesWithNotFound = ({ children }: Props) => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to={'/404'} />}></Route>
            <Route path="/404" element={<h1> Pagina no encontrada! </h1>}></Route>
            {children}
        </Routes>

    )
}