import React, { useState } from "react";

const ChallengeOne = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default ChallengeOne;
