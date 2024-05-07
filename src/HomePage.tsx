import { useFieldArray, useForm } from "react-hook-form";
import { CardInput, FormHeader, SideBar } from "./components";
import { Flashcard } from "./data";
import LabelledInput from "./components/LabelledInput";
import { useEffect, useState } from "react";
import { DB_KEYS, getFromDB, saveToDB } from "./DbManager";
import { nanoid } from "nanoid";
export type DeckValuesForm = {
    id:string;
    title: string;
    cards: Flashcard[];
};

const HomePage = () => {
    const {register,reset,control,handleSubmit,formState:{errors},setValue} = useForm<DeckValuesForm>();
    const [decks, setDecks] = useState<DeckValuesForm[]>([]);
    const [isEditing,setIsEditing] = useState<boolean>(false);
   
    async function handleCardSave(data: DeckValuesForm) {
        // TODO: Handle saving to indexedDB
       
        if(isEditing){
          //If the Card is in the edit
          const newDeck = decks.map((deck:DeckValuesForm)=>{
            if(deck.id==data.id){
              return data;
            }
            return deck
          })
          setDecks(newDeck);
          await saveToDB(DB_KEYS.SAVE_DECK,newDeck)
        }else{
          //new card Edit
          data = {...data,id:nanoid()}
          const newDeck = [...decks,data]
          setDecks(newDeck);
          await saveToDB(DB_KEYS.SAVE_DECK,newDeck)
        }
       setIsEditing(false)
       reset({id:'',cards:[],title:''})
    }

    const { fields, append, remove } = useFieldArray({
        name: "cards",
        control,
    });

useEffect(()=>{
  async function getDecksFromDB() {
      const result:DeckValuesForm[] = await getFromDB(DB_KEYS.SAVE_DECK)
     if(result){
      setDecks(result)
     }else{
      setDecks([])
     }
     
  }
  getDecksFromDB()
},[])

const handleEditCardDeck = async(deck:DeckValuesForm)=>{
  //TODO get from the indexed db
  setIsEditing(true)
  console.log("Hello Edit Card",deck);
  setValue('title',deck.title)
  setValue('cards',deck.cards)
  setValue('id',deck.id)
}
const handleDeleteCardDeck = async(deleteCardDeck:DeckValuesForm)=>{
 
  const newDeck = decks.filter((deck:DeckValuesForm)=>deck.title!==deleteCardDeck.title)
  setDecks(newDeck)
  //Save to Deck
  await saveToDB(DB_KEYS.SAVE_DECK,newDeck)
}
const handleCancelCardDeck = async()=>{
  setIsEditing(false)
  reset({id:'',cards:[],title:''})
}

    return (
        <div className="container grid grid-cols-2 gap-12 mx-auto p-4 ">
            <SideBar decks={decks}onEdit={handleEditCardDeck} onDelete={handleDeleteCardDeck}/>
            <div className="flex flex-col gap-4">
                <FormHeader
                    onCancel={handleCancelCardDeck }
                    onSave={handleSubmit(handleCardSave)}
                    isEditing={isEditing}
                >
                    <LabelledInput
                        id="title"
                        label="Deck Title"
                        placeholder="Enter the Deck title here..."
                        register={register}
                        errors={errors}
                        regName="title"
                        idx={-1}
                        regOptions={{
                            required: {
                                value: true,
                                message: "Deck Title can't be empty",
                            },
                        }}
                    />
                </FormHeader>

                {fields.map((field, idx) => (
                    <CardInput
                        key={field.id}
                        onDelete={() => remove(idx)}
                        orderNumber={idx}
                    >
                        <LabelledInput
                            idx={idx}
                            label="Question"
                            errors={errors}
                            id={`cards.${idx}.question`}
                            placeholder="Place Question here"
                            register={register}
                            regName={`cards.${idx}.question`}
                            regOptions={{
                                required: {
                                    value: true,
                                    message: "Question can't be empty",
                                },
                            }}
                        />
                        <LabelledInput
                            idx={idx}
                            label="Answer"
                            id={`cards.${idx}.answer`}
                            placeholder="Place the Correct Answer Here..."
                            errors={errors}
                            register={register}
                            regName={`cards.${idx}.answer`}
                            regOptions={{
                                required: {
                                    value: true,
                                    message: "Answer can't be empty",
                                },
                            }}
                        />
                    </CardInput>
                ))}

                <button
                    className="px-4 py-2 mb-8 bg-blue-600 rounded-md border border-white"
                    onClick={() =>
                        append({ question: "", answer: "", queue: "unseen" })
                    }
                >
                    Add Card to Deck
                </button>
            </div>
        </div>
    );
};

export default HomePage;
