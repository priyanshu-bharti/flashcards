interface CardInputProps {
    onDelete: () => void;
    orderNumber: number;
    children: React.ReactNode;
}
const CardInput = ({ orderNumber, onDelete, children }: CardInputProps) => {
    return (
        <div className="flex flex-col gap-2 bg-gray-800 p-4 rounded-md">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold capitalize">
                    card {orderNumber + 1}
                </h1>
                <button
                    className="px-4 py-2 bg-red-500 rounded-md border border-white"
                    onClick={onDelete}
                >
                    Delete
                </button>
            </div>
            {children}
        </div>
    );
};

export default CardInput;
