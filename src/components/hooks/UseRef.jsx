import React, { useContext, useEffect, useRef, useState } from 'react'

function UseRef() {

  const [count , setCount] = useState(0); // count ++
  const reff = useRef(0) //count ++

  const ref = useRef(); // input fiels

  function f(){
    console.log(ref); // print element
    console.log(ref.current); // input fiels
    setCount(count => count + 1) // count ++
  }

  useEffect(() => {
    reff.current = reff.current + 1 // rendring count 
  })
  
  return (
    <div className='text-center flex justify-center items-center flex-col py-24'>
      <p>
        <span className='text-orange-300 text-2xl font-bold'>useRef</span> is a react hook that allows us to create mutable variables, which will not re-render the components.It is also used for accessing the DOM elements.
      </p>
      {/* input field print  */}
        <div className="flex flex-col gap-4 justify-center items-center">
            <input type="text" className='border-2 px-4 py-1 w-60 outline-purple-400 rounded-full' ref={ref}/>
            <button onClick={f} className='border-2 py-1 w-24 rounded-full'>Click Here</button>
        </div>

      {/* Count jsx */}
      <div className="text-center py-12"> 
        <h1>{count}</h1>
        <h2>Render count : {reff.current}</h2>
    </div>
    </div>
  )
}

export default UseRef