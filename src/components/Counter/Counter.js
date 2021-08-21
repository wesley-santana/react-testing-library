import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function getModifier() {
    if(counter > 0) {
      return 'Counter--success' 
    }
    if(counter < 0) {
      return 'Counter--danger' 
    }
    return ''
  }

  return (
    <>
      <h1 className={`Counter ${getModifier()}`}>{counter}</h1>
      <div>
        <button onClick={() => setCounter(counter - 1)} className="Button Button--danger">
          -
        </button>
        <button onClick={() => setCounter(counter + 1)} className="Button Button--success">
          +
        </button>
      </div>
    </>
  )
};

//https://www.youtube.com/watch?v=pbwXsjVEMqg

export default Counter;