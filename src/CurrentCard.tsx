import React from "react";
import { Flashcard } from "./data";

function CurrentCard({
    currentCard,
    viewingDeck,
    setViewingDeck,
    setCurrentCard,
}: {
    currentCard: number;
    setViewingDeck: React.Dispatch<React.SetStateAction<Flashcard[]>>;
    viewingDeck: Flashcard[];
    setCurrentCard: React.Dispatch<React.SetStateAction<number>>;
}) {

    function handlePositive() {

    }
    if (!viewingDeck[currentCard])
        return (
            <div className="font-bold text-3xl text-pink-300 text-center">
                Loading...
            </div>
        );
    return (
        <div className="space-y-3 text-center">
            <h1 className="font-bold text-3xl text-pink-300">Current Card</h1>
            <h2 className="text-xl font-bold text-violet-300">
                {viewingDeck[currentCard].question}
            </h2>
            <p className="">{viewingDeck[currentCard].answer}</p>
            <div className="flex gap-4 justify-center">
                <button className="bg-teal-900 px-4 py-2 rounded-md">
                    👍 I know this
                </button>
                <button className=" bg-red-900 px-4 py-2 rounded-md">
                    ❌ I don't know this
                </button>
            </div>
        </div>
    );
}

export default CurrentCard;
