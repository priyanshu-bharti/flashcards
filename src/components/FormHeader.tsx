import  { FC } from 'react'
import LabelledInput from './LabelledInput';
interface FormHeaderProps{
  onSave:()=>void;
  onCancel:()=>void;
  isEditing?:boolean;
}

const FormHeader = ({onSave,onCancel,isEditing=false}:FormHeaderProps) => {
  return (
    <div className='flex flex-col gap-4 '>
      <div className='flex justify-between items-center'>
       <h1 className='text-4xl font-bold'>{!isEditing ? 'Create new Deck' :'Edit Deck'}</h1>
        <div className='flex gap-2'>
        {isEditing &&  <button onClick={onCancel}>cancel</button> }
        <button onClick={onSave}>Save</button>
        </div>
       
      </div>
      <LabelledInput name='Some Name' label='Title' placeholder='enter your title here...'/>
     
    </div>
  )
}

export default FormHeader