import React from 'react'

function RenderCheck() {
  console.log("Checking success!");
  return (
    <div className='font-semibold text-xl '>
      Render Checking</div>
  )
}

export default React.memo(RenderCheck);