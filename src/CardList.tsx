import { Flashcard } from "./data";

const colors = {
    "Unseen Deck": "text-purple-300",
    "Learning Deck": "text-red-300",
    "Reviewing Deck": "text-amber-300",
    "Mastered Deck": "text-teal-300",
};

function CardList({ deck, title }: { deck: Flashcard[]; title: string }) {
    return (
        <div className="border border-gray-700 p-4 divide-y divide-gray-600">
            <h1 className={"text-2xl font-bold pb-2 " + colors[title]}>
                {title}
            </h1>
            {deck.map((card) => (
                <div className="text-sm py-2">{card.question} </div>
            ))}
        </div>
    );
}

export default CardList;
