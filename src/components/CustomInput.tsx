import { Controller, type Control, type FieldError } from "react-hook-form"
import { Input } from "./ui/input"
import { Label } from "./ui/label"


interface Props {
    name: string,
    control: Control<any>,
    label: string,
    type?: string,
    error?: FieldError

}

export const CustomInput = ({ control, label, name, type, error }: Props) => {
    return (
        <fieldset className="flex flex-col gap-2" >
            <Label htmlFor={label} >  {label}  </Label>
            <Controller name={name}
                control={control}
                render={({ field }) => <Input id={name} type={type}  {...field} />} />

            {error && <p className="text-red-600"> {error.message} </p>}
        </fieldset>
    )
}
