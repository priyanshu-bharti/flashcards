import { useEffect, useState } from "react";
import { Flashcard, data } from "./data";

function App() {
    const [unseenDeck, setUnseenDeck] = useState<Flashcard[]>([]);
    const [learningDeck, setLearningDeck] = useState<Flashcard[]>([]);
    const [reviewingDeck, setReviewingDeck] = useState<Flashcard[]>([]);
    const [masteredDeck, setMasteredDeck] = useState<Flashcard[]>([]);
    const [viewingDeck, setViewingDeck] = useState<Flashcard[]>([]);
    const [currentCard, setCurrentCard] = useState<Flashcard | undefined>();

    useEffect(() => {
        data.forEach((el) => {
            switch (el.deck) {
                case "unseen":
                    setUnseenDeck([...unseenDeck, el]);
                    break;
                case "learning":
                    setLearningDeck([...learningDeck, el]);
                    break;
                case "mastered":
                    setMasteredDeck([...masteredDeck, el]);
                    break;
                case "reviewing":
                    setReviewingDeck([...reviewingDeck, el]);
                    break;
            }
        });
    }, []);

    return (
        <div>
            <h1 className="">Flashcards app</h1>
            <div className="">
                <div>
                    {/* Display Unseen Cards Here */}
                    {unseenDeck.map((card) => (
                        <div>{card.question} </div>
                    ))}
                </div>
                <div>{/* Display Learning Cards Here */}</div>
                {learningDeck.map((card) => (
                    <div>{card.question} </div>
                ))}
                <div>{/* Display Reviewing Cards Here */}</div>
                {reviewingDeck.map((card) => (
                    <div>{card.question} </div>
                ))}
                <div>{/* Display Mastered Cards Here */}</div>
                {masteredDeck.map((card) => (
                    <div>{card.question} </div>
                ))}
            </div>
        </div>
    );
}

export default App;
