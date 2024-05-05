import { useEffect, useState } from "react";
import {
    Flashcard,
    learningDeckData,
    masteredDeckData,
    reviewingDeckData,
    unseenDeckData,
} from "./data";

function createViewingDeck(
    V: Flashcard[],
    unseenDeck: Flashcard[],
    learningDeck: Flashcard[],
    reviewingDeck: Flashcard[],
    masteredDeck: Flashcard[]
) {
    const LEARNING_INTERVAL = 3;
    const REVIEW_INTERVAL = 5;

    // Pass 1: Add all the items from the unseen deck
    V.push(...unseenDeck);

    // Pass 2: Add items from Learning deck to every LEARNING_INTERVAL consecutive positions
    for (let i = 0; i < learningDeck.length; i++) {
        const insertionIndex = (i + 1) * LEARNING_INTERVAL - 1;
        if (insertionIndex < V.length) {
            V.splice(insertionIndex, 0, learningDeck[i]);
        } else {
            // If V's length is not enough, add the remaining learning cards to the end
            V.push(...learningDeck.slice(i));
            break;
        }
    }

    // Pass 3: Add items from reviewing deck to every REVIEW_INTERVAL consecutive positions
    for (let i = 0; i < reviewingDeck.length; i++) {
        const insertionIndex = (i + 1) * REVIEW_INTERVAL - 1;
        if (insertionIndex < V.length) {
            V.splice(insertionIndex, 0, reviewingDeck[i]);
        } else {
            // If V's length is not enough, add the remaining reviewing cards to the end
            V.push(...reviewingDeck.slice(i));
            break;
        }
    }

    // Final Pass: Append Item from mastered deck
    V.push(...masteredDeck);
}

export function useViewingDeck(): [
    number,
    Flashcard[],
    Flashcard[],
    Flashcard[],
    Flashcard[],
    Flashcard[],
    () => void,
    () => void
] {
    const [usnDeck, setUsnDeck] = useState<Flashcard[]>(unseenDeckData);
    const [lrnDeck, setLrnDeck] = useState<Flashcard[]>(learningDeckData);
    const [revDeck, setRevDeck] = useState<Flashcard[]>(reviewingDeckData);
    const [mstDeck, setMstDeck] = useState<Flashcard[]>(masteredDeckData);

    const [viewingDeck, setViewingDeck] = useState<Flashcard[]>([]);
    const [currCardIdx, setCurrCardIdx] = useState<number>(0);
    const currentCard = viewingDeck[currCardIdx];

    const V: Flashcard[] = [];

    createViewingDeck(V, usnDeck, lrnDeck, revDeck, mstDeck);

    useEffect(() => {
        setViewingDeck(V);
    }, []);

    function handlePositive() {
        console.log("I know this",currentCard);

        if (currentCard.deck === "unseen") {
            const idx = usnDeck.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the unseen deck
                const temp = usnDeck.splice(idx, 1)[0];
                temp.deck = 'mastered'
                // Push to the mastered deck
                setMstDeck([...mstDeck, temp]);
                // Update the unseen deck
                setUsnDeck([...usnDeck]);
            }
        }
        if (currentCard.deck === "learning") {
            const idx = lrnDeck.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the learning deck
                const temp = lrnDeck.splice(idx, 1)[0];
                temp.deck = 'reviewing'
                // Push to the reviewing deck
                setRevDeck([...revDeck, temp]);
                // Update the learning deck
                setLrnDeck([...lrnDeck]);
            }
        }
        if (currentCard.deck === "reviewing") {
            const idx = revDeck.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the reviewing deck
                const temp = revDeck.splice(idx, 1)[0];
                temp.deck = 'mastered'
                // Push to the mastered deck
                setMstDeck([...mstDeck, temp]);
                // Update the reviewing deck
                setRevDeck([...revDeck]);
            }
        }
        setCurrCardIdx((prevState) => (prevState + 1) % viewingDeck.length);
    }

    function handleNegative() {
        console.log("I don't know this");

        if (currentCard.deck === "unseen") {
            const idx = usnDeck.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the reviewing deck
                const temp = usnDeck.splice(idx, 1)[0];
                temp.deck = 'learning'
                // Push to the lrn deck
                setLrnDeck([...lrnDeck, temp]);
                // Update the reviewing deck
                setUsnDeck([...usnDeck]);
            }
        }

        if (currentCard.deck === "reviewing") {
            const idx = revDeck.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the reviewing deck
                const temp = revDeck.splice(idx, 1)[0];
                // Push to the learning deck
                temp.deck = 'learning'
                setLrnDeck([...lrnDeck, temp]);
                // Update the reviewing deck
                setRevDeck([...revDeck]);
            }
        }

        if (currentCard.deck === "mastered") {
            const idx = mstDeck.indexOf(currentCard);
            if (idx !== -1) {
                // Remove from the reviewing deck
                const temp = mstDeck.splice(idx, 1)[0];
                // Push to the mastered deck
                temp.deck = 'learning'
                setLrnDeck([...lrnDeck, temp]);
                // Update the reviewing deck
                setMstDeck([...mstDeck]);
            }
        }

        setCurrCardIdx((prevState) => (prevState + 1) % viewingDeck.length);
    }

    return [
        currCardIdx,
        viewingDeck,
        usnDeck,
        lrnDeck,
        revDeck,
        mstDeck,
        handlePositive,
        handleNegative,
    ];
}
