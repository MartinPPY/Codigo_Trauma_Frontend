import { AuthFormLayout } from "../layout/AuthFormLayout"
import z from 'zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomField } from "../fileds/CustomField"
import { Button } from "../ui/button"

const schema = z.object({
    username: z.string().min(1, 'El nombre de usuario es obligatorio'),
    password: z.string().min(8, 'La contraseña debe de tener un minimo de 8 caracteres').max(12, 'La contraseña debe de tener un maximo de 12 caracteres')
})

type formValues = z.infer<typeof schema>


const description: string = 'Ingresa con tu nombre de usuario y contraseña'

export const AuthForm = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<formValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<formValues> = (data) => {
        console.log(data)
    }

    return (
        <AuthFormLayout buttonText="Iniciar Sesión" description={description} title="Inicio De Sesión" buttonType="submit" titleOp="Bienvenido a Codigo Trauma" >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                <CustomField control={control} label="Nombre de usuario" name="username" placeholder="Ingresa tu nombre de usuario" error={errors.username} type="text" />
                <CustomField control={control} label="Contraseña" name="password" placeholder="Ingresa tu contraseña" error={errors.password} type="password" />
                <Button className="w-full" type="submit">Iniciar Sesion</Button>
            </form>
        </AuthFormLayout>
    )
}
