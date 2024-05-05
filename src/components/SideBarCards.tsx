import React from 'react'
interface SideBarCardProps{
  length:number;
  title:string;
  onEdit:()=>void;
  onDelete:()=>void;
}

const SideBarCard:React.FC<SideBarCardProps> = ({length,title,onEdit,onDelete}) => {
  return (
    <div className='flex flex-col gap-2 p-4 bg-gray-900 rounded-md'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl '>
            {title}
          </h2>
          <div className='flex gap-2'>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
          </div>
        </div>
        <p>{length} Cards</p>
        <p>21 Learning,5 Reviewing, 5 Mastered</p>
    </div>
  )
}

export default SideBarCard