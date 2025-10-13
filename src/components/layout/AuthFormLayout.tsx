import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import type { ReactNode } from "react"

interface Props {
    children: ReactNode,
    titleOp?: string,
    title: string,
    description: string,
    buttonType?: "submit" | "reset" | "button" | undefined,
    buttonText: string,
    buttonVariant?: "link" | "default" | "destructive" | "ghost" | undefined
}


export const AuthFormLayout = ({ children, title, titleOp, description }: Props) => {
    return (
        <Card className="lg:w-1/3 w-full">
            <CardHeader>
                <CardTitle className="text-center">{titleOp}</CardTitle>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* Formulario de autenticación  */}
                {children}
            </CardContent>
        </Card>
    )
}
