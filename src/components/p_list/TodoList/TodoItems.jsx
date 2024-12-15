import React, { useState } from 'react'

function TodoItems({el,handleDelete}) {
  const [completed, setCompleted] = useState(false);

  function listDblClick() {
    setCompleted((pre) => !pre);
  }

  return (
    <div className={`flex justify-between items-center border my-2 border-violet-700 h-[42px] px-2 rounded-md ${completed ? 'bg-orange-300' : ''}`}>
        <li 
        className={`list-none text-md 
          ${completed ? 'line-through' : ''} 
          ${completed ? 'italic' : ''}
          ${completed ? 'text-gray-400' : ''}
          `}
        onClick={listDblClick}>{el}</li>
        <div className="flex justify-center items-center gap-2">
            <button className='w-[60px] h-[30px] bg-green-700 text-white rounded-md'>Edit</button>
            <button className='w-[60px] h-[30px] bg-red-500 text-white rounded-md' 
            onClick={() => handleDelete(el)}>Delete</button>
        </div>
    </div>
  )
}

export default TodoItems