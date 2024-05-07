import { Link } from "react-router-dom";
import { DeckValuesForm } from "../HomePage";

interface SideBarCardProps {
    length: number;
    title: string;
    onEdit: () => void;
    onDelete: () => void;
    decks:DeckValuesForm;
}

const SideBarCard = ({ length, title, onEdit, onDelete,decks }: SideBarCardProps) => {
    return (
        <Link   
            to="/practice"
            state={{decks}}
            className="flex flex-col gap-2 p-4 bg-purple-700 rounded-md"
        >
            <div className="flex items-center justify-between">
                <h2 className="text-2xl ">{title}</h2>
                <div className="flex gap-2">
                    <button
                        className="px-4 py-2 bg-black rounded-md border border-white"
                        onClick={onEdit}
                    >
                        Edit
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 rounded-md border border-white"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <p>{length} Cards</p>
        </Link>
    );
};

export default SideBarCard;
