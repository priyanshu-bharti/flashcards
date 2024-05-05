import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
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
  errors?: FieldErrors<FormValues>;
}

const LabelledInput = ({
  label = "",
  placeholder,
  id,
  register,
  registrationParams,
  registrationOptions,
  errors,
  inputIdx,
}: LabelledInputProps) => {
  let questionError: string;
  if (errors && errors.card) {
    questionError = errors.card[inputIdx]?.question?.message ?  errors.card[inputIdx]?.question?.message :  errors.card[inputIdx]?.answer?.message;
  }
  console.log(errors);
  

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
          {...register(registrationParams, registrationOptions)}
          required
        />
      </form>
      {/* {errors[id] && (
        <span className="text-red-900 align-middle">{errors[id]?.message}</span>
      )}
      {questionError && (
        <span className="text-red-900 align-middle">{questionError}</span>
      )} */}
    </>
  );
};

export default LabelledInput;
