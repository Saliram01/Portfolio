import React from 'react'

function CardSearchBar({fun1}) {
  return (
    <div className='border-2 w-60 flex items-center justify-between px-2 rounded'>
        <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
        <input className='py-2.5 outline-none font-medium' type="text" placeholder='Search for a product ...' onChange={(e) => fun1(e.target.value) }/>
    </div>
  )
}

export default CardSearchBar