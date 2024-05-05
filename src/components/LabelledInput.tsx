import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormValues } from "../HomePage";
interface LabelledInputProps {
    label?: string;
    placeholder?: string;
    id: string;
    register: UseFormRegister<FormValues>;
    inputIdx?: number;
    registrationParams:
        | "title"
        | "card"
        | `card.${number}`
        | `card.${number}.question`
        | `card.${number}.answer`
        | `card.${number}.queue`;
    registrationOptions?: RegisterOptions<
        FormValues,
        | "title"
        | "card"
        | `card.${number}`
        | `card.${number}.question`
        | `card.${number}.answer`
        | `card.${number}.queue`
    >;
}

const LabelledInput = ({
    label = "",
    placeholder,
    id,
    register,
    registrationParams,
    registrationOptions,
}: LabelledInputProps) => {
    return (
        <form className="flex gap-2 justify-center items-center">
            {label && (
                <label htmlFor={id} className="min-w-20 font-bold">
                    {label}
                </label>
            )}
            <input
                placeholder={placeholder}
                className="w-full p-2 bg-transparent outline-gray-400 ring-gray-400 border rounded-lg border-gray-400 placeholder:text-white"
                id={id}
                {...register(registrationParams, registrationOptions)}
                // TODO Make this register work.
            />
            {/* {e}<span></span> */}
        </form>
    );
};

export default LabelledInput;
