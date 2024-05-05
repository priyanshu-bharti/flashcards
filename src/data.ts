export interface Flashcard {
    question: string;
    answer: string;
    queue: "unseen" | "learning" | "reviewing" | "mastered";
}

export const unseenCardData: Flashcard[] = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
        queue: "unseen",
    },
    {
        question: "What is the chemical symbol for water?",
        answer: "H2O",
        queue: "unseen",
    },
    {
        question: "What is the tallest mammal on Earth?",
        answer: "Giraffe",
        queue: "unseen",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answer: "William Shakespeare",
        queue: "unseen",
    },
    {
        question: "What is the powerhouse of the cell?",
        answer: "Mitochondria",
        queue: "unseen",
    },
    {
        question: "What is the chemical formula for table salt?",
        answer: "NaCl",
        queue: "unseen",
    },
    {
        question: "What is the capital of Japan?",
        answer: "Tokyo",
        queue: "unseen",
    },
    {
        question: "What year did Christopher Columbus reach the Americas?",
        answer: "1492",
        queue: "unseen",
    },
    {
        question: "What is the primary gas that makes up Earth's atmosphere?",
        answer: "Nitrogen",
        queue: "unseen",
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter",
        queue: "unseen",
    },
];

export const learningCardData: Flashcard[] = [
    {
        question: "What is the formula for Newton's second law of motion?",
        answer: "Force equals mass times acceleration (F=ma)",
        queue: "learning",
    },
    {
        question: "Who proposed the theory of relativity?",
        answer: "Albert Einstein",
        queue: "learning",
    },
    {
        question:
            "What is the formula for calculating the perimeter of a rectangle?",
        answer: "2 * (length + width)",
        queue: "learning",
    },
    {
        question: "What is the chemical symbol for iron?",
        answer: "Fe",
        queue: "learning",
    },
    {
        question: "Who discovered penicillin?",
        answer: "Alexander Fleming",
        queue: "learning",
    },
];

export const reviewingCardData: Flashcard[] = [
    {
        question: "What are the three states of matter?",
        answer: "Solid, liquid, gas",
        queue: "reviewing",
    },
    {
        question: "What is the largest organ in the human body?",
        answer: "Skin",
        queue: "reviewing",
    },
    {
        question: "What is the speed of light in a vacuum?",
        answer: "299,792 kilometers per second",
        queue: "reviewing",
    },
    {
        question: "Who is credited with the invention of the telephone?",
        answer: "Alexander Graham Bell",
        queue: "reviewing",
    },
    {
        question: "What is the chemical formula for methane?",
        answer: "CH4",
        queue: "reviewing",
    },
];

export const masteredCardData: Flashcard[] = [
    {
        question: "What is the capital of Brazil?",
        answer: "Brasília",
        queue: "mastered",
    },
    {
        question: "Who painted 'The Starry Night'?",
        answer: "Vincent van Gogh",
        queue: "mastered",
    },
    {
        question: "What is the atomic number of oxygen?",
        answer: "8",
        queue: "mastered",
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answer: "Harper Lee",
        queue: "mastered",
    },
    {
        question: "What is the chemical formula for hydrogen peroxide?",
        answer: "H2O2",
        queue: "mastered",
    },
];
