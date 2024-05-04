import { useEffect, useState } from "react";
import {
    Flashcard,
    unseenDeckData,
    learningDeckData,
    reviewingDeckData,
    masteredDeckData,
} from "./data";
import CurrentCard from "./CurrentCard";
import CardList from "./CardList";

function App() {
    const LEARNING_THRESHOLD = 3;
    const REVIEW_THRESHOLD = 5;

    const [unseenDeck, setUnseenDeck] = useState<Flashcard[]>(unseenDeckData);
    const [learningDeck, setLearningDeck] =
        useState<Flashcard[]>(learningDeckData);
    const [reviewingDeck, setReviewingDeck] =
        useState<Flashcard[]>(reviewingDeckData);
    const [masteredDeck, setMasteredDeck] =
        useState<Flashcard[]>(masteredDeckData);
    const [viewingDeck, setViewingDeck] = useState<Flashcard[]>([]);
    const [currentCard, setCurrentCard] = useState<number>(0);

    useEffect(() => {
        const V = [];

        // Pass 1: Add all the items from the unseen deck
        V.push(...unseenDeck);
        console.log(V);

        // Pass 2: Add items from Learning deck to 3rd consecutive position
        for (
            let i = 0;
            i < Math.min(learningDeck.length, Math.floor(V.length / 3));
            i++
        ) {
            V.splice((i + 1) * LEARNING_THRESHOLD - 1, 0, learningDeck[i]);
        }

        // If length of Viewing deck is not a multiple of 3, add items from Learning and Reviewing deck alternately
        if (V.length % LEARNING_THRESHOLD !== 0) {
            const remaining = V.length % LEARNING_THRESHOLD;

            for (let i = 0; i < remaining; i++) {
                if (i % 2 === 0) V.push(learningDeck[Math.floor(i / 2)]);
                else V.push(reviewingDeck[Math.floor(i / 2)]);
            }
        }

        // Pass: 3 Add items from reviewing deck every 5th consecutive position
        for (
            let i = 0;
            i < Math.min(reviewingDeck.length, Math.floor(V.length / 5));
            i++
        ) {
            V.splice((i + 1) * REVIEW_THRESHOLD - 1, 0, reviewingDeck[i]);
        }

        // Final Pass: Append Item from mastered deck
        V.push(...masteredDeck);
        setViewingDeck(V.filter((i) => i !== undefined));
    }, [learningDeck, reviewingDeck, unseenDeck, masteredDeck]);

    function handlePositive() {
        console.log("I know this");
        // If unseen deck contains this card & viewingDeck[currentCard].deck === "unseen", pysh to mastered deck
        // If learning deck contains this card & viewingDeck[currentCard].deck === "learning", push to reviewing deck
        // If reviewing deck contains this card & viewingDeck[currentCard].deck === "reviewing", push to mastered deck
        setCurrentCard((prevState) => (prevState + 1) % viewingDeck.length);
    }

    function handleNegative() {
        console.log("I don't know this");
        // If this card is in any deck other than learning, push to learning deck
        setCurrentCard((prevState) => (prevState + 1) % viewingDeck.length);
    }

    return (
        <div className="space-y-8 px-6 mx-auto">
            <h1 className="text-5xl font-bold py-4 text-blue-300">
                Flashcards app
            </h1>

            <CurrentCard viewingDeck={viewingDeck} currentCard={currentCard}>
                <button
                    onClick={handlePositive}
                    className="bg-teal-900 px-4 py-2 rounded-md"
                >
                    👍 I know this
                </button>
                <button
                    onClick={handleNegative}
                    className=" bg-red-900 px-4 py-2 rounded-md"
                >
                    ❌ I don't know this
                </button>
            </CurrentCard>

            <div className="">
                <div className="py-2 grid grid-cols-4">
                    <CardList deck={unseenDeck} title="Unseen Deck" />
                    <CardList deck={learningDeck} title="Learning Deck" />
                    <CardList deck={reviewingDeck} title="Reviewing Deck" />
                    <CardList deck={masteredDeck} title="Mastered Deck" />
                    <CardList deck={viewingDeck} title="Viewing Deck" />
                </div>
            </div>
        </div>
    );
}

export default App;
