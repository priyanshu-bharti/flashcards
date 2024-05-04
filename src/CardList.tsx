import { Flashcard } from "./data";

const colors = {
    "Unseen Deck": "text-purple-300",
    "Learning Deck": "text-red-300",
    "Reviewing Deck": "text-amber-300",
    "Mastered Deck": "text-teal-300",
    "Viewing Deck": "",
};

const deckColor = {
    unseen: "text-gray-300",
    learning: "text-red-300",
    reviewing: "text-amber-300",
    mastered: "text-teal-300",
};

function CardList({
    deck,
    title,
}: {
    deck: Flashcard[];
    title:
        | "Unseen Deck"
        | "Reviewing Deck"
        | "Learning Deck"
        | "Mastered Deck"
        | "Viewing Deck";
}) {
    return (
        <div className="border border-gray-700 p-4 divide-y divide-gray-600">
            <h1 className={"text-2xl font-bold pb-2 " + colors[title]}>
                {title}
            </h1>
            {deck.map((card) => (
                <div
                    key={card.question}
                    className={"text-sm py-2 " + deckColor[card.deck]}
                >
                    {card.question}{" "}
                </div>
            ))}
        </div>
    );
}

export default CardList;
