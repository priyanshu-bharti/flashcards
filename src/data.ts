export interface Flashcard {
    question: string;
    answer: string;
    deck: "unseen" | "learning" | "reviewing" | "mastered";
}

export const unseenDeckData: Flashcard[] = [
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

export const learningDeckData: Flashcard[] = [
    {
        question: "What is the formula for Newton's second law of motion?",
        answer: "Force equals mass times acceleration (F=ma)",
        deck: "learning"
    },
    {
        question: "Who proposed the theory of relativity?",
        answer: "Albert Einstein",
        deck: "learning"
    },
    {
        question: "What is the formula for calculating the perimeter of a rectangle?",
        answer: "2 * (length + width)",
        deck: "learning"
    },
    {
        question: "What is the chemical symbol for iron?",
        answer: "Fe",
        deck: "learning"
    },
    {
        question: "Who discovered penicillin?",
        answer: "Alexander Fleming",
        deck: "learning"
    }
];

export const reviewingDeckData: Flashcard[] = [
    {
        question: "What are the three states of matter?",
        answer: "Solid, liquid, gas",
        deck: "reviewing"
    },
    {
        question: "What is the largest organ in the human body?",
        answer: "Skin",
        deck: "reviewing"
    },
    {
        question: "What is the speed of light in a vacuum?",
        answer: "299,792 kilometers per second",
        deck: "reviewing"
    },
    {
        question: "Who is credited with the invention of the telephone?",
        answer: "Alexander Graham Bell",
        deck: "reviewing"
    },
    {
        question: "What is the chemical formula for methane?",
        answer: "CH4",
        deck: "reviewing"
    }
];

export const masteredDeckData: Flashcard[] = [
    {
        question: "What is the capital of Brazil?",
        answer: "Brasília",
        deck: "mastered"
    },
    {
        question: "Who painted 'The Starry Night'?",
        answer: "Vincent van Gogh",
        deck: "mastered"
    },
    {
        question: "What is the atomic number of oxygen?",
        answer: "8",
        deck: "mastered"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answer: "Harper Lee",
        deck: "mastered"
    },
    {
        question: "What is the chemical formula for hydrogen peroxide?",
        answer: "H2O2",
        deck: "mastered"
    }
];