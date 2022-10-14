import React, { useState } from "react";

const ChallengeOne = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1 className="text-blue-700 font-semibold">Challenge 1</h1>
      <p className="font-bold text-lg">Counter: {counter}</p>
      <button className="border border-4 border-indigo-600 p-2 m-2 bg-blue-300" onClick={() => setCounter(counter + 1)}>increment</button>
      <button className="border border-4 border-indigo-600 p-2 m-2 bg-blue-300" onClick={() => setCounter(counter - 1)}>decrement</button>
    </div>
  );
};

export default ChallengeOne;
