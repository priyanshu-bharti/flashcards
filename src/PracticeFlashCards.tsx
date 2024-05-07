import { Link, useLocation } from "react-router-dom";
import { CardList, CurrentCard } from "./components";
import { useViewingCards } from "./useViewingCards";
import BackIcon from "./assets/backIcon";
const PracticeFlashCards = () => {
  const { state } = useLocation();

  const [
    currCardIdx,
    viewingCards,
    unseenCards,
    learningCards,
    reviewingCards,
    masteredCards,
    handlePositive,
    handleNegative,
  ] = useViewingCards(state.decks.cards);

  return (
    <div className="space-y-8 px-6 mx-auto">
      <div className="flex gap-4">
        <Link to="/" className="flex items-center">
          <svg
            className="h-10 w-10 text-gray-500"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
          </svg>
        </Link>
        <h1 className="text-5xl font-bold py-4 text-blue-300">
          {state.decks.title}
        </h1>
      </div>
      <CurrentCard viewingCards={viewingCards} currentCard={currCardIdx}>
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
};

export default PracticeFlashCards;
