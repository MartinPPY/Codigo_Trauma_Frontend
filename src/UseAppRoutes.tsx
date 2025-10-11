import type { ReactNode } from "react"
import { AppRouter } from "./AppRouter"
import './index.css'

interface Props {
    children: ReactNode
}

export const UseAppRouter = ({ children }: Props) => {
    return (
        <AppRouter>
            {children}
        </AppRouter>
    )
}