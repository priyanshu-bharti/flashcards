
import { CardList, CurrentCard } from './components';
import { useViewingCards } from './useViewingCards';

const PracticeFlashCards = () => {
    const [
        currCardIdx,
        viewingCards,
        unseenCards,
        learningCards,
        reviewingCards,
        masteredCards,
        handlePositive,
        handleNegative,
    ] = useViewingCards();


    return (
        <div className="space-y-8 px-6 mx-auto">
            <h1 className="text-5xl font-bold py-4 text-blue-300">
                Flashcards app
            </h1>

            <CurrentCard viewingDeck={viewingCards} currentCard={currCardIdx}>
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
                <div className="py-2 grid grid-cols-5">
                    <CardList cards={viewingCards} title="Viewing Deck" />
                    <CardList cards={unseenCards} title="Unseen Deck" />
                    <CardList cards={learningCards} title="Learning Deck" />
                    <CardList cards={reviewingCards} title="Reviewing Deck" />
                    <CardList cards={masteredCards} title="Mastered Deck" />
                </div>
            </div>
        </div>
    );
}

export default PracticeFlashCards
