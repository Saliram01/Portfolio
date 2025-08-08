import React, { useCallback, useState } from 'react'
import RenderCheck from './RenderCheck'

function UseCallback() {
    const [count,setCount] = useState(0);

    // const f1 = () => {};
    const f1 = useCallback(() => {},[]);

  return (
    <div className='flex flex-col justify-center items-center h-[65vh]'>
        <ul className='text-center'>
            <li><span className='text-orange-300 font-bold text-2xl'>UseCallback</span> is a react hook that lets you cache a function definition between re-render.</li>
            <li>It means, when we use useCallback hook , it does not create multiple instance of same function when re-render happens.<br/> Instead of creating new instance of the function , it provides cached a function on re-render of the components.</li>
        </ul>

        <div className='text-center py-4'>
            <RenderCheck f1={f1}/>
            <h1 className='mb-2 text-2xl'>{count}</h1>
            <button className='border-2 px-2 py-1' onClick={() => setCount(count + 1)}>Click Here</button>
        </div>
    </div>
  )
}

export default UseCallback