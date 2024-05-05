import { useForm } from "react-hook-form";
import { CardInput, FormHeader, SideBar } from "./components";
import { Flashcard } from "./data";
import LabelledInput from "./components/LabelledInput";

export type FormValues = {
    title: string;
    card: Flashcard[];
};

const HomePage = () => {
    const form = useForm<FormValues>();

    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    return (
        <div className="container grid grid-cols-2 gap-12 mx-auto p-4 ">
            <SideBar />
            <div className="grid gap-4">
                <FormHeader onCancel={() => {}} onSave={() => {}}>
                    <LabelledInput
                        id="Some Name"
                        label="Title"
                        placeholder="Enter the Deck title here..."
                        register={register}
                        registrationParams="title"
                    />
                </FormHeader>
                <CardInput onDelete={() => {}} orderNumber={0 + 1}>
                    <LabelledInput
                        label="Question"
                        id="Question"
                        placeholder="Place Question here"
                        register={register}
                        registrationParams={`card.${0}.question`}
                    />
                    <LabelledInput
                        label="Answer"
                        id="Answer"
                        placeholder="Place the Correct Answer Here..."
                        register={register}
                        registrationParams={`card.${0}.answer`}
                    />
                </CardInput>
            </div>
        </div>
    );
};

export default HomePage;
