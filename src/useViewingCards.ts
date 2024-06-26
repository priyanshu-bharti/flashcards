import { useEffect, useState } from "react";
import {
    Flashcard,
    learningCardData,
    masteredCardData,
    reviewingCardData,
    unseenCardData,
} from "./data";

function createViewingQueue(
    V: Flashcard[],
    unseenCards: Flashcard[],
    learningCards: Flashcard[],
    reviewingCards: Flashcard[],
    masteredCards: Flashcard[]
) {
    const LEARNING_INTERVAL = 3;
    const REVIEW_INTERVAL = 5;

    // Pass 1: Add all the items from the unseen deck
    V.push(...unseenCards);

    // Pass 2: Add items from Learning deck to every LEARNING_INTERVAL consecutive positions
    for (let i = 0; i < learningCards.length; i++) {
        const insertionIndex = (i + 1) * LEARNING_INTERVAL - 1;
        if (insertionIndex < V.length) {
            V.splice(insertionIndex, 0, learningCards[i]);
        } else {
            // If V's length is not enough, add the remaining learning cards to the end
            V.push(...learningCards.slice(i));
            break;
        }
    }

    // Pass 3: Add items from reviewing deck to every REVIEW_INTERVAL consecutive positions
    for (let i = 0; i < reviewingCards.length; i++) {
        const insertionIndex = (i + 1) * REVIEW_INTERVAL - 1;
        if (insertionIndex < V.length) {
            V.splice(insertionIndex, 0, reviewingCards[i]);
        } else {
            // If V's length is not enough, add the remaining reviewing cards to the end
            V.push(...reviewingCards.slice(i));
            break;
        }
    }

    // Final Pass: Append Item from mastered deck
    V.push(...masteredCards);
}

export function useViewingCards(initialDeck:Flashcard[]): [
    number,
    Flashcard[],
    Flashcard[],
    Flashcard[],
    Flashcard[],
    Flashcard[],
    () => void,
    () => void
] {
    const [unseenCards, setUnseenCards] = useState<Flashcard[]>(initialDeck);
    const [learningCards, setLearningCards] =
        useState<Flashcard[]>([]);
    const [reviewingCards, setReviewingCards] =
        useState<Flashcard[]>([]);
    const [masteredDeck, setMasteredDeck] =
        useState<Flashcard[]>([]);

    const [viewingCards, setViewingCards] = useState<Flashcard[]>([]);
    const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
    const currentCard = viewingCards[currentCardIndex];

    const V: Flashcard[] = [];

    createViewingQueue(
        V,
        unseenCards,
        learningCards,
        reviewingCards,
        masteredDeck
    );

    useEffect(() => {
        setViewingCards(V);
    }, []);

    function handlePositive() {
        console.log("I know this", currentCard);

        if (currentCard.queue === "unseen") {
            const idx = unseenCards.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the unseen deck
                const temp = unseenCards.splice(idx, 1)[0];
                temp.queue = "mastered";
                // Push to the mastered deck
                setMasteredDeck([...masteredDeck, temp]);
                // Update the unseen deck
                setUnseenCards([...unseenCards]);
            }
        }
        if (currentCard.queue === "learning") {
            const idx = learningCards.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the learning deck
                const temp = learningCards.splice(idx, 1)[0];
                temp.queue = "reviewing";
                // Push to the reviewing deck
                setReviewingCards([...reviewingCards, temp]);
                // Update the learning deck
                setLearningCards([...learningCards]);
            }
        }
        if (currentCard.queue === "reviewing") {
            const idx = reviewingCards.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the reviewing deck
                const temp = reviewingCards.splice(idx, 1)[0];
                temp.queue = "mastered";
                // Push to the mastered deck
                setMasteredDeck([...masteredDeck, temp]);
                // Update the reviewing deck
                setReviewingCards([...reviewingCards]);
            }
        }
        setCurrentCardIndex(
            (prevState) => (prevState + 1) % viewingCards.length
        );
    }

    function handleNegative() {
        console.log("I don't know this");

        if (currentCard.queue === "unseen") {
            const idx = unseenCards.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the reviewing deck
                const temp = unseenCards.splice(idx, 1)[0];
                temp.queue = "learning";
                // Push to the lrn deck
                setLearningCards([...learningCards, temp]);
                // Update the reviewing deck
                setUnseenCards([...unseenCards]);
            }
        }

        if (currentCard.queue === "reviewing") {
            const idx = reviewingCards.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the reviewing deck
                const temp = reviewingCards.splice(idx, 1)[0];
                // Push to the learning deck
                temp.queue = "learning";
                setLearningCards([...learningCards, temp]);
                // Update the reviewing deck
                setReviewingCards([...reviewingCards]);
            }
        }

        if (currentCard.queue === "mastered") {
            const idx = masteredDeck.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the reviewing deck
                const temp = masteredDeck.splice(idx, 1)[0];
                // Push to the mastered deck
                temp.queue = "learning";
                setLearningCards([...learningCards, temp]);
                // Update the reviewing deck
                setMasteredDeck([...masteredDeck]);
            }
        }

        setCurrentCardIndex(
            (prevState) => (prevState + 1) % viewingCards.length
        );
    }

    return [
        currentCardIndex,
        viewingCards,
        unseenCards,
        learningCards,
        reviewingCards,
        masteredDeck,
        handlePositive,
        handleNegative,
    ];
}
