import React from 'react'
import useChook from './useChook'

function UseLocalStorage() {
  const [name, setName] = useChook('username','');

  return (
    <div className='flex flex-col justify-center items-center h-[65vh]'>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border-2 px-1 py-1 text-center outline-none' placeholder='Enter your name'/>
        <h1>Hello, {name}!</h1>

    </div>

  
  )
}

export default UseLocalStorage