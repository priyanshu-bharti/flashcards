import { SideBarCard } from ".";
import { DeckValuesForm } from "../HomePage";

interface SidebarProps {
    decks: DeckValuesForm[];
    onEdit:(deck:DeckValuesForm)=>void;
    onDelete:(deck:DeckValuesForm)=>void;
}

const SideBar = ({ decks,onEdit,onDelete }: SidebarProps) => {
    return (
        <div className="flex flex-col gap-4 py-8">
            <h1 className="text-4xl font-bold">All Decks</h1>
            {decks.length ? (
                decks.map((deck, idx) => (
                    <SideBarCard
                        decks={deck}
                        key={deck.title + `${idx}`}
                        length={deck.cards.length}
                        onDelete={()=>onDelete(deck)}
                        onEdit={()=>onEdit(deck)}
                        title={deck.title}
                    />
                ))
            ) : (
                <p className="text-xl">
                    No decks created 😢 <br /> Please create a new deck first.
                </p>
            )}
        </div>
    );
};

export default SideBar;
