
import { Button } from "../components/ui/button"
import { UseApi } from "../hooks/useApi"
import type { LoginRequest, LoginResponse } from "../models/auth.models"
import { login } from "../services/api.service"

const loginRequest: LoginRequest = {
    username: "Martin Romero_c9d067",
    password: "123456789"
}

export const Login = () => {

    const { data, error, fetch, loading } = UseApi<LoginResponse, LoginRequest>(login)

    if (loading) {
        return (<p>Cargando</p>)
    }

    if (error) {
        return (<p>Ups {error.message}</p>)
    }


    return (
        <>
            {data && (<div> {JSON.stringify(data.username)} </div>)}
            <Button onClick={() => fetch(loginRequest)} > Login </Button>
        </>
    )


    /*return (
        <AuthLayout>
            <AuthForm />
        </AuthLayout>
    )*/

}