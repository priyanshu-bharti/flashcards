import LabelledInput from "./LabelledInput";

interface CardInputProps {
    onDelete: () => void;
    orderNumber: number;
}
const CardInput = ({ orderNumber: cardNumber, onDelete }: CardInputProps) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold capitalize">
                    card {cardNumber}
                </h1>
                <button onClick={onDelete}>Delete</button>
            </div>
            <LabelledInput
                label="Question"
                name="Question"
                placeholder="Place Question here"
            />
            <LabelledInput
                label="Answer"
                name="Answer"
                placeholder="Place the Correct Answer Here..."
            />
        </div>
    );
};

export default CardInput;
