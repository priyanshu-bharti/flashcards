import CurrentCard from "./CurrentCard";
import CardList from "./CardList";
import { useViewingDeck } from "./useViewingDeck";

function App() {
    const [
        currCardIdx,
        viewingDeck,
        unseenDeck,
        learningDeck,
        reviewingDeck,
        masteredDeck,
        handlePositive,
        handleNegative,
    ] = useViewingDeck();

    /*
     */

    return (
        <div className="space-y-8 px-6 mx-auto">
            <h1 className="text-5xl font-bold py-4 text-blue-300">
                Flashcards app
            </h1>

            <CurrentCard viewingDeck={viewingDeck} currentCard={currCardIdx}>
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
                    <CardList deck={viewingDeck} title="Viewing Deck" />
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
