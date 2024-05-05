import React from "react";
import { Flashcard } from "../data";

function CurrentCard({
    children,
    currentCard,
    viewingCards,
}: {
    children: React.ReactNode;
    currentCard: number;
    viewingCards: Flashcard[];
}) {
    const deckColor = {
        unseen: "text-gray-300",
        learning: "text-red-300",
        reviewing: "text-amber-300",
        mastered: "text-teal-300",
    };

    if (!viewingCards[currentCard])
        return (
            <div className="font-bold text-3xl text-pink-300 text-center">
                Loading...
            </div>
        );
    return (
        <div className="space-y-3 text-center">
            <h1 className="font-bold text-3xl text-pink-300">Current Card</h1>
            <h2 className="text-xl font-bold text-violet-300">
                {viewingCards[currentCard].question}
            </h2>
            <p className={deckColor[viewingCards[currentCard].queue]}>
                {viewingCards[currentCard].answer}
            </p>
            <div className="flex gap-4 justify-center">{children}</div>
        </div>
    );
}

export default CurrentCard;
