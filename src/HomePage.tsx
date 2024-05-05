import { useFieldArray, useForm } from "react-hook-form";
import { CardInput, FormHeader, SideBar } from "./components";
import { Flashcard } from "./data";
import LabelledInput from "./components/LabelledInput";
import { useState } from "react";

export type FormValues = {
    title: string;
    cards: Flashcard[];
};

const HomePage = () => {
    const form = useForm<FormValues>();

    const { register, control, handleSubmit } = form;

    function handleCardSave(data: FormValues) {
        // TODO: Handle saving to indexedDB
        console.log(data);
    }

    const { fields, append, remove } = useFieldArray({
        name: "cards",
        control,
    });

    return (
        <div className="container grid grid-cols-2 gap-12 mx-auto p-4 ">
            <SideBar />
            <div className="grid gap-4">
                <FormHeader
                    onCancel={() => {}}
                    onSave={handleSubmit(handleCardSave)}
                >
                    <LabelledInput
                        id="title"
                        label="Deck Title"
                        placeholder="Enter the Deck title here..."
                        register={register}
                        regName="title"
                        regOptions={{
                            required: {
                                value: true,
                                message: "Deck Title can't be empty",
                            },
                        }}
                    />
                </FormHeader>

                {fields.map((field, idx) => (
                    <CardInput
                        key={field.id}
                        onDelete={() => remove(idx)}
                        orderNumber={idx}
                    >
                        <LabelledInput
                            label="Question"
                            id={`cards.${idx}.question`}
                            placeholder="Place Question here"
                            register={register}
                            regName={`cards.${idx}.question`}
                            regOptions={{
                                required: {
                                    value: true,
                                    message: "Question can't be empty",
                                },
                            }}
                        />
                        <LabelledInput
                            label="Answer"
                            id={`cards.${idx}.answer`}
                            placeholder="Place the Correct Answer Here..."
                            register={register}
                            regName={`cards.${idx}.answer`}
                            regOptions={{
                                required: {
                                    value: true,
                                    message: "Answer can't be empty",
                                },
                            }}
                        />
                    </CardInput>
                ))}

                <button
                    className="px-4 py-2 bg-teal-600 rounded-md border border-white"
                    onClick={() =>
                        append({ question: "", answer: "", queue: "unseen" })
                    }
                >
                    Add More
                </button>
            </div>
        </div>
    );
};

export default HomePage;
