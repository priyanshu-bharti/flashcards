import { useEffect, useState } from "react";
import { Flashcard, data } from "./data";
import CurrentCard from "./CurrentCard";
import CardList from "./CardList";

function App() {
    const [unseenDeck, setUnseenDeck] = useState<Flashcard[]>(data);
    const [learningDeck, setLearningDeck] = useState<Flashcard[]>([]);
    const [reviewingDeck, setReviewingDeck] = useState<Flashcard[]>([]);
    const [masteredDeck, setMasteredDeck] = useState<Flashcard[]>([]);
    const [viewingDeck, setViewingDeck] = useState<Flashcard[]>([]);
    const [currentCard, setCurrentCard] = useState<number>(0);

    useEffect(() => {
        setViewingDeck([...unseenDeck]);
    }, [unseenDeck]);

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
                </div>
            </div>
        </div>
    );
}

export default App;
