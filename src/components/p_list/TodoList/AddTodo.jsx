import React, { useState } from 'react'

function AddTodo({addList}) {
    const [userText, setUserText] = useState('');

    function handleAdd() {
        if(userText !== '') {
            addList(userText);
            setUserText('');
        }
    }

    function onKeyHandler(e) {
        if(e.key === 'Enter') {
            addList(userText);
            setUserText('');
        }
    }

    function handleCancel(e) {
        setUserText(e.target.value = '');
    }

  return (
    <div className='w-[400px]'>
        <input type="text" value={userText} placeholder='Add todo list...' className="border-2 border-slate-400 w-full p-2 rounded-md outline-orange-400 " onChange={(e) => setUserText(e.target.value)} onKeyDown={onKeyHandler}/>
        <div className="my-3 space-x-2">
            <button className={`${userText ? 'bg-blue-600' : ''} h-[35px] px-3 bg-gray-400 text-white rounded-md`} onClick={handleAdd}>Submit</button>
            <button className={`${userText ? 'bg-blue-600' : ''} h-[35px] px-3 bg-gray-400 text-white rounded-md`} onClick={handleCancel}>Cancel</button>
        </div>
        <p className='italic'>Click on todo to toggle completion status</p>
    </div>
  )
}

export default AddTodo