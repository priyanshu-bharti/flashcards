import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { DeckValuesForm } from "../HomePage";
interface LabelledInputProps {
    label?: string;
    placeholder?: string;
    idx: number;
    id: string;
    register: UseFormRegister<DeckValuesForm>;
    errors: FieldErrors<DeckValuesForm>;
    regName:
        | "title"
        | "cards"
        | `cards.${number}`
        | `cards.${number}.question`
        | `cards.${number}.answer`
        | `cards.${number}.queue`;
    regOptions:
        | RegisterOptions<
              DeckValuesForm,
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
    idx,
    register,
    regName,
    regOptions,
    errors,
}: LabelledInputProps) => {
    const [type, _, field] = id.split(".");
    console.log(field);
    console.log(idx);

    return (
        <>
            <div className="flex gap-2 justify-center items-center">
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
            </div>
            <p className="text-red-700">
                {idx === -1 && errors[type]?.message}
                {/* {(idx > -1 && field==="question") && errors.cards[idx]?.question}
                {(idx > -1 && field==="answer") && errors.cards[idx]?.answer} */}
            </p>
        </>
    );
};

export default LabelledInput;
