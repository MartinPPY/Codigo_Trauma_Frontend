import { Controller, type Control, type FieldError } from "react-hook-form"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface Props {
    label: string,
    type?: string,
    placeholder: string
    name: string,
    control: Control<any>,
    error?: FieldError
}

export const CustomField = ({ label, type, placeholder, name, control, error }: Props) => {
    return (
        <div className="flex flex-col gap-4">
            <Label htmlFor={name}> {label} </Label>
            <Controller name={name}
                control={control}
                render={({ field }) => <Input type={type}  {...field} placeholder={placeholder} id={name} name={name} required />} />
            {error && <p className="text-red-500" > {error.message} </p>}
        </div>
    )
}
