export interface Flashcard {
    question: string;
    answer: string;
    deck: "unseen" | "learning" | "reviewing" | "mastered";
}

export const data: Flashcard[] = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
        deck: "unseen"
    },
    {
        question: "What is the chemical symbol for water?",
        answer: "H2O",
        deck: "unseen"
    },
    {
        question: "What is the tallest mammal on Earth?",
        answer: "Giraffe",
        deck: "unseen"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answer: "William Shakespeare",
        deck: "unseen"
    },
    {
        question: "What is the powerhouse of the cell?",
        answer: "Mitochondria",
        deck: "unseen"
    },
    {
        question: "What is the chemical formula for table salt?",
        answer: "NaCl",
        deck: "unseen"
    },
    {
        question: "What is the capital of Japan?",
        answer: "Tokyo",
        deck: "unseen"
    },
    {
        question: "What year did Christopher Columbus reach the Americas?",
        answer: "1492",
        deck: "unseen"
    },
    {
        question: "What is the primary gas that makes up Earth's atmosphere?",
        answer: "Nitrogen",
        deck: "unseen"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter",
        deck: "unseen"
    }
];