import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../HomePage";
interface LabelledInputProps {
    label?: string;
    placeholder?: string;
    name: string;
    register: UseFormRegister<FormValues>;
}

const LabelledInput = ({
    label = "",
    placeholder,
    name,
    register,
}: LabelledInputProps) => {
    return (
        <form className="flex gap-2 justify-center items-center">
            {label && (
                <label htmlFor={name} className="min-w-20 font-bold">
                    {label}
                </label>
            )}
            <input
                placeholder={placeholder}
                className="w-full p-2 bg-transparent outline-gray-400 ring-gray-400 border rounded-lg border-gray-400 placeholder:text-white"
                name={name}
                id={name}
                // {...register()}
                // TODO Make this register work.
            />
            {/* {e}<span></span> */}
        </form>
    );
};

export default LabelledInput;
