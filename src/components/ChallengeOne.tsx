import React, { useState } from "react";

const ChallengeOne = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default ChallengeOne;
