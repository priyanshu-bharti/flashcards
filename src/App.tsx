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

    return (
        <div className="space-y-8 px-6 mx-auto">
            <h1 className="text-5xl font-bold py-4 text-blue-300">
                Flashcards app
            </h1>
            <CurrentCard
                viewingDeck={viewingDeck}
                setViewingDeck={setViewingDeck}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
            />
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
