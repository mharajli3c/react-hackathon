import React, { useState } from "react";


const ChallengeOne = () => {
  const [counter, setCounter] = useState(0);


  const decrementCounter = () => {
    setCounter(counter - 1);
  }
  
  const incrementCounter = () => {
    setCounter(counter + 1);
  }
  

  return (
    <div>
      <button
        type="button"
        onClick={decrementCounter}>Decrement Counter</button>
        <button
        type="button"
        onClick={incrementCounter}>Increment Counter</button>
      <p>Counter: {counter}</p>
    </div>
  );

};


export default ChallengeOne;
