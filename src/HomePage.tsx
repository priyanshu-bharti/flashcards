import { useForm } from "react-hook-form";
import { CardInput, FormHeader, SideBar } from "./components";
import { Flashcard } from "./data";
import LabelledInput from "./components/LabelledInput";
import { useState } from "react";

export type FormValues = {
  title: string;
  card: Flashcard[];
};

const HomePage = () => {
  const form = useForm<FormValues>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const handleSaveCard = (formValues: any) => {
    console.log("Submitted Values :- ", formValues);
  };
  const [cardDeck, setCardDeck] = useState<Flashcard[]>([
    { question:"1", answer: "1", queue: "unseen" },
  ]);
  const handleAddMoreCards = ()=>{
    setCardDeck(prev=>[...prev,{ question: `${prev.length+1}`, answer: `${prev.length+1}`, queue: "unseen" }])
  } 
  const handleDeleteCard = (card:Flashcard)=>{
    
    setCardDeck(prev=>prev.filter((flashcard:Flashcard)=>flashcard.question !==card.question))
  }
  return (
    <div className="container grid grid-cols-2 gap-12 mx-auto p-4 ">
      <SideBar />
      <div className="grid gap-4">
        <FormHeader onCancel={() => {}} onSave={handleSubmit(handleSaveCard)}>
          <LabelledInput
            id="title"
            label="title"
            placeholder="Enter the Deck title here..."
            register={register}
            registrationParams="title"
            registrationOptions={{required:"this field is required"}}
            errors={errors}
          />
        </FormHeader>
        {cardDeck.map((card: Flashcard, index: number) => (
          <CardInput key={`${card.question}-${index}`} onDelete={() => handleDeleteCard(card)} orderNumber={index+1}>
            <LabelledInput
              label="Question"
              id={`question-${index}`}
              placeholder="Place Question here"
              register={register}
              registrationParams={`card.${index}.question`}
              registrationOptions={{required:"this field is required"}}
              errors={errors}
              inputIdx={index}
            />
            <LabelledInput
              label="Answer"
              id={`answer-${index}`}
              placeholder="Place the Correct Answer Here..."
              register={register}
              errors={errors}
              registrationParams={`card.${index}.answer`}
              registrationOptions={{required:"this field is required"}}
              inputIdx={index}
            />
          </CardInput>
        ))}

        <button
          className="px-4 py-2 bg-teal-600 rounded-md border border-white"
          onClick={handleAddMoreCards}
        >
          Add More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
