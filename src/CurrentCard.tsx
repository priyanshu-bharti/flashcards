import React from "react";

function CurrentCard() {
    return (
        <div className="space-y-3 text-center">
            <h1 className="font-bold text-3xl text-pink-300">Current Card</h1>
            <h2 className="text-xl font-bold text-violet-300">Question</h2>
            <p className="">Answer</p>
            <div className="flex gap-4 justify-center">
                <button className="bg-teal-900 px-4 py-2 rounded-md">
                    👍 I know this
                </button>
                <button className=" bg-red-900 px-4 py-2 rounded-md">
                    ❌ I don't know this
                </button>
            </div>
        </div>
    );
}

export default CurrentCard;
