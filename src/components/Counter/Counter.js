import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => setCounter(counter - 1)} className="Button">
          -
        </button>
        <button onClick={() => setCounter(counter + 1)} className="Button">
          +
        </button>
      </div>
    </>
  )
};

//https://www.youtube.com/watch?v=pbwXsjVEMqg

export default Counter;