import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const AuthLayout = ({ children }: Props) => {
    return (
        <div className="bg-cyan-50 p-4  w-screen h-screen flex justify-center items-center">
            {children}
        </div>
    )
}
