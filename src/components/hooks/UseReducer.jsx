import React, { useReducer, useState } from "react";

function UseReducer() {
  const initializer = { count: 0 };

  const reducer = (state, action) => {
    switch(action.type){
        case 'increase' : {return { count: state.count + 1 };
      }
        case 'decrease' : {return {count : state.count - 1};
      }
        case 'input' : {return {count : action.payload};
      }
        default : {return state;}
    }
  };
  
  const [state, dispatch] = useReducer(reducer, initializer);

  return (
    <div className="flex flex-col justify-center items-center gap-2 h-[65vh]">
      <p>useReducer is a react hook which is similar to useState but instead of providing state and softer function. It provides state and dispatch function.</p>
      <p>It accept two arguments : Reduce function and Initial state</p>
      <p>and return : current state and dispatch method.</p>
      <h1 className="px-2 py-2">{state.count}</h1>
      <div className="flex gap-4">
        <button className="border-2 px-2 py-1" onClick={() => dispatch({type : 'decrease'})}>
          Decrease
        </button>
        <button className="border-2 px-2 py-1" onClick={() => dispatch({type : 'increase'})}>
          Increase
        </button>
      </div>
      <input value={state.count} className="border-2 px-1" onChange={(e) => dispatch({type : 'input',payload : Number(e.target.value)})} type="number"/>
    </div>
  );
}

export default UseReducer;
