import { useForm, type SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { CustomInput } from '../CustomInput'
import { useApi } from '../../hooks'
import type { LoginRequest, LoginResponse } from '@/models'
import { login } from '../../services/api.service'
import { useEffect } from 'react'
import { Spinner } from '../ui/spinner'
import { useGlobalContext } from '../../context'

const schema = z.object({
    username: z.string().min(4, 'El nombre de usuario debe tener al menos 4 caracteres'),
    password: z.string().min(4, 'La contraseña debe tener al menos 4 caracteres')
})

type FormValues = z.infer<typeof schema>

export const AuthForm = () => {


    const { data, error, fetch, loading } = useApi<LoginResponse, LoginRequest>(login)//Primero va lo que retorna y luego lo que recibe como parametro
    const { setUser } = useGlobalContext()

    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FormValues> = (request: LoginRequest) => {
        fetch(request)
    }

    useEffect(() => {
        if (data) {
            console.log(data)
            localStorage.setItem('user', JSON.stringify(data))
            setUser(data)
        }
    }, [data])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/3  '>
                <Card className=''>
                    <CardHeader className='text-center'>
                        <CardTitle> Inicio de sesión </CardTitle>
                        <CardDescription> Ingresa tus credenciales para acceder </CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-4'>
                        <CustomInput control={control} label='Nombre de usuario:' name='username' error={errors.username} />
                        <CustomInput control={control} label='Contraseña:' name='password' error={errors.password} />
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full' disabled={loading} type='submit'>

                            {loading ? (
                                <>
                                    <Spinner />
                                    Cargando...
                                </>
                            ) : 'Iniciar sesión'}

                        </Button>

                        <p> {error && error.message} </p>
                    </CardFooter>
                </Card>
            </form>
        </>
    )

}
