import React from 'react'

function CardSelectMenu({f2}) {
  return (
    <select className='py-2.5 border-2 w-60 rounded px-2 outline-none' onChange={(e) => f2(e.target.value)}>
        <option hidden="">Filter By Brand</option>
        <option value="soundcore">Soundcore</option>
        <option value="Marshall">Marshall</option>
        <option value="jbl">jbl</option>
        <option value="sony">Sony</option>
        <option value="Denon">Denon</option>
        <option value="apple">Apple</option>
        <option value="redmi">Redmi</option>
        <option value="samsung">Samsung</option>
        <option value="mi">Mi</option>
        <option value="acer">Acer</option>
        <option value="LG">LG</option>
        <option value="Denon">Denon</option>
        <option value="Bang & Olufsen">Bang & Olufsen</option>
        <option value="Mivi">Mivi</option>
        <option value="boat">Boat</option>
        <option value="panasonic">Panasonic</option>
        <option value="CredevZone">CredevZone</option>
        <option value="logitech G">logitech G</option>
        <option value="ant esports">Ant esports</option>
        <option value="Sennheiser">Sennheiser</option>
        <option value="xiaomi">Xiaomi</option>
        <option value="Amkette">Amkette</option>
        <option value="microsoft">Microsoft</option>
    </select>
  )
}

export default CardSelectMenu