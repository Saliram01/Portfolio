import React from 'react'

function Button({title, showResume, setShowResume}) {
  return (
    <button onClick={() => setShowResume(!showResume)} className='py-2 w-52 rounded-full border border-indigo-500 transition-all delay-75 hover:bg-indigo-400 text-purple-800 hover:text-white'>{title}</button>
  )
}

export default Button