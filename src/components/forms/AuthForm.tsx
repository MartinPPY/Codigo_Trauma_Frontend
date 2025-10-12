import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const AuthForm = () => {
    return (
        <Card className="md:w-1/3 w-full">
            <CardHeader>
                <CardTitle className="text-center">Bienvenido a Codigo Trauma</CardTitle>
                <CardTitle>Inicio De Sesión</CardTitle>
                <CardDescription>
                    Ingresa con tu correo electronico y contraseña
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* Formulario para iniciar sesion  */}
                <form className="flex flex-col gap-10">
                    <fieldset className="flex flex-col gap-2">
                        <Label  htmlFor="email"> Correo electronico  </Label>
                        <Input type="email" placeholder="Ingresa tu correo electronico" id="email"/>
                    </fieldset>

                    <fieldset className="flex flex-col gap-2">
                        <Label  htmlFor="password"> Contraseña  </Label>
                        <Input type="password" placeholder="Ingresa tu contraseña" id="password"/>
                    </fieldset>
                </form>
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant={"default"}>Iniciar Sesión</Button>
            </CardFooter>
        </Card>
    )
}
