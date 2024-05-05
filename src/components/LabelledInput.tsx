import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormValues } from "../HomePage";
interface LabelledInputProps {
    label?: string;
    placeholder?: string;
    id: string;
    register: UseFormRegister<FormValues>;
    regName:
        | "title"
        | "cards"
        | `cards.${number}`
        | `cards.${number}.question`
        | `cards.${number}.answer`
        | `cards.${number}.queue`;
    regOptions:
        | RegisterOptions<
              FormValues,
              | "title"
              | "cards"
              | `cards.${number}`
              | `cards.${number}.question`
              | `cards.${number}.answer`
              | `cards.${number}.queue`
          >
        | undefined;
}

const LabelledInput = ({
    label = "",
    placeholder,
    id,
    register,
    regName,
    regOptions,
}: LabelledInputProps) => {
    return (
        <>
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
                    {...register(regName, regOptions)}
                    required
                />
            </form>
        </>
    );
};

export default LabelledInput;
