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
                        name="Some Name"
                        label="Title"
                        placeholder="Enter the Deck title here..."
                        register={register}
                    />
                </FormHeader>
                <CardInput onDelete={() => {}} orderNumber={1}>
                    <LabelledInput
                        label="Question"
                        name="Question"
                        placeholder="Place Question here"
                        register={register}
                    />
                    <LabelledInput
                        label="Answer"
                        name="Answer"
                        placeholder="Place the Correct Answer Here..."
                        register={register}
                    />
                </CardInput>
            </div>
        </div>
    );
};

export default HomePage;
