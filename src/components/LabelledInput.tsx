import React from "react";

interface LabelledInputProps {
    label?: string;
    placeholder?: string;
    name: string;
}

const LabelledInput = ({
    label = "",
    placeholder,
    name,
}: LabelledInputProps) => {
    return (
        <form>
            {label && <label>{label}</label>}
            <input
                placeholder={placeholder}
                className="w-full p-2 bg-gray-950 outline-gray-400 ring-gray-400 border rounded-lg border-gray-400"
                //TODO Needs to be Changed for react hook forms
                name={name}
            />
            {/* {e}<span></span> */}
        </form>
    );
};

export default LabelledInput;
