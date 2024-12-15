import React, { useEffect, useState} from 'react'

function UseEffect() {
    const [count , setCount] = useState(0);

    useEffect(() => {
    console.log(`Count has changed to ${count}`);

    return (() => {
      console.log('Cleanup for the previous count value');
    })
  },[count])

  return (
    <div className='text-center py-48'>
      <section>
        <span className='text-orange-300 text-2xl font-bold'>useEffect </span>
         is a react hook which allows you to perform side effects in your components.
        <ul>Some examples of side effect are :
          <li>1. Fetching data from API</li> 
          <li>2. Directly updating the DOM</li>
          <li>3. Timers like setTimeout and setTimeIntervals</li>
        </ul> 
        1.
      </section>
      <h2 className='mb-3'>You clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)} className='border-2 py-1 px-6'>Click Me</button>
    </div>
  )
}

export default UseEffect