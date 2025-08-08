import React, { useEffect, useLayoutEffect } from 'react';

function UseLayoutEffect() {
    
    useEffect(() => {
        // side effect logic
        console.log("Message from useEffet");
        return () => {
            // Cleanup code

        };

    },[]);

    useLayoutEffect(() => {
        // side effect logic
        console.log("Message from useLayoutEffect");
        return () => {
            // Cleanup code

        };

    },[]);

  return (
    <div className='flex flex-col justify-center items-center h-[65vh]'>
        <p>useLayoutEffect is a react hook which is similar to useEffect but it is called before the user interface get muted. useLayout get called before printing the dom element.</p>
        <h1>Random Number</h1>
        {Array(12).fill('').map((item,index) => (
            <li key={index}>{Math.pow(Math.random() + 1,10)}</li>))}    
    </div>
  )
}

export default UseLayoutEffect