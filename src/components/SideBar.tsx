import { SideBarCard } from ".";

const SideBar = () => {
    return (
        <div className=" flex flex-col gap-4 ">
            <h1 className="text-4xl font-bold">All Decks</h1>
            <SideBarCard
                length={21}
                onDelete={() => {}}
                onEdit={() => {}}
                title="Programming Questions"
            />
        </div>
    );
};

export default SideBar;
