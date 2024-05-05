import React from "react";
interface FormHeaderProps {
    onSave: () => void;
    onCancel: () => void;
    isEditing?: boolean;
    children: React.ReactNode;
}

const FormHeader = ({
    onSave,
    onCancel,
    isEditing = false,
    children,
}: FormHeaderProps) => {
    return (
        <div className="flex flex-col gap-4 py-8">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">
                    {!isEditing ? "Create new Deck" : "Edit Deck"}
                </h1>
                <div className="flex gap-2">
                    {isEditing && <button onClick={onCancel}>cancel</button>}
                    <button
                        className="px-4 py-2 bg-teal-600 rounded-md border border-white"
                        onClick={onSave}
                    >
                        Save
                    </button>
                </div>
            </div>
            {children}
        </div>
    );
};

export default FormHeader;
