import Reat, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <div>
        <button className="Button">
            +
        </button>
        <button className="Button">
            -
        </button>
      </div>
    </>
  )
};

//https://www.youtube.com/watch?v=pbwXsjVEMqg

export default Counter;