import React from "react";
import { Flashcard } from "./data";

function CurrentCard({
    children,
    currentCard,
    viewingDeck,
}: {
    children: React.ReactNode;
    currentCard: number;
    viewingDeck: Flashcard[];
}) {
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
            <div className="flex gap-4 justify-center">{children}</div>
        </div>
    );
}

export default CurrentCard;
