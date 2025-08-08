import React from 'react'

function Footer() {
  return (
    <div className='h-40 bg-slate-50 flex justify-center items-center flex-col gap-6'>
      <ul className='flex justify-center items-center gap-4'>
        <li className='text-2xl cursor-pointer'><i className="fa-brands fa-facebook"></i></li>
        <li className='text-2xl cursor-pointer'><i className="fa-brands fa-twitter"></i></li>
        <li className='text-2xl cursor-pointer'><i className="fa-brands fa-instagram"></i></li>
        <li className='text-2xl cursor-pointer'><i className="fa-brands fa-linkedin-in"></i></li>
      </ul>
      <strong>@saliramchaudhary. All Rights Reserved</strong>
    </div>
  )
}

export default Footer