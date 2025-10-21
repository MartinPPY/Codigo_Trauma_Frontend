import type { ReactNode } from "react"


interface Props {
    children: ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
        <main className="min-h-screen w-screen flex justify-center items-center p-4">
            {children}
        </main>
    )
}
