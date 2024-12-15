import React, { useMemo, useState } from 'react'

function UseMemo() {
  const [number,setNumber] = useState(0);
  const [counter,setCounter] = useState(0);

  function cubeNum(num){
    console.log('Clalculation done!');
    return Math.pow(num,3)
  }

  // const result = cubeNum(number);
  const result = useMemo(() => cubeNum(number),[number]);

  return (
    <div className='flex flex-col justify-center items-center h-[65vh]'>
        <ul className='text-center'>
            <li><span className='text-orange-300 text-2xl font-bold'>useMemo</span> is a react hook that returns a memoized value.('its like catching a value so that it doesn't need to be calculated.')</li>
            <li>The useMemo hooks only runs when one of its dependencies gets updated.
            This can improve the performance of the applications.</li>
            <li>There is one more hook in react to improvence performance that is useCallback hook.</li>
            The useMemo and useCallback hooks are similar. The main difference is :-
            <li>1. useMemo returns a memoized value</li>
            <li>2. useCallback returns a memoized function</li>
        </ul>
        <input className='border-2 my-4 px-1' type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
        <h1>Cube of the number : {result}</h1>
        <button className='border-2 px-2 my-2' onClick={() => setCounter(counter + 1)}>Counter++</button>
        <h2>{counter}</h2>
    </div>
  )
}

export default UseMemo;