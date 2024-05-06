import { useFieldArray, useForm } from "react-hook-form";
import { CardInput, FormHeader, SideBar } from "./components";
import { Flashcard } from "./data";
import LabelledInput from "./components/LabelledInput";
import { useState } from "react";
import { set } from "idb-keyval";
import { DB_KEYS, saveToDB } from "./DbManager";

export type DeckValuesForm = {
    title: string;
    cards: Flashcard[];
};

const HomePage = () => {
    const {register,control,handleSubmit,formState:{errors}} = useForm<DeckValuesForm>();
    const [decks, setDecks] = useState<DeckValuesForm[]>([]);

   async function handleCardSave(data: DeckValuesForm) {
        // TODO: Handle saving to indexedDB
        console.log(data);
        setDecks((prevState) => prevState.concat(data));
       await saveToDB(DB_KEYS.SAVE_DECK,decks)
    }

    const { fields, append, remove } = useFieldArray({
        name: "cards",
        control,
    });

    return (
        <div className="container grid grid-cols-2 gap-12 mx-auto p-4 ">
            <SideBar decks={decks} />
            <div className="flex flex-col gap-4">
                <FormHeader
                    onCancel={() => {}}
                    onSave={handleSubmit(handleCardSave)}
                >
                    <LabelledInput
                        id="title"
                        label="Deck Title"
                        placeholder="Enter the Deck title here..."
                        register={register}
                        errors={errors}
                        regName="title"
                        idx={-1}
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
                            idx={idx}
                            label="Question"
                            errors={errors}
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
                            idx={idx}
                            label="Answer"
                            id={`cards.${idx}.answer`}
                            placeholder="Place the Correct Answer Here..."
                            errors={errors}
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
                    className="px-4 py-2 mb-8 bg-blue-600 rounded-md border border-white"
                    onClick={() =>
                        append({ question: "", answer: "", queue: "unseen" })
                    }
                >
                    Add Card to Deck
                </button>
            </div>
        </div>
    );
};

export default HomePage;
