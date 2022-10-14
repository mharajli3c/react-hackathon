import { useEffect, useRef } from "react";

const ChallengeSix = () => {
  const inputRef = useRef(null);

  // Utilize useEffect to auto focus the input element via the ref
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  

  return (
    <div className="flex flex-col items-center m-2">
      <h1 className="text-blue-700 font-semibold">Challenge 6</h1>
      <form>
        <p>
          {/* Utilize a ref on this input to auto focus on page load */}
          <input
            className="border-solid border-black border-2"
            type="text"
            name="search"
            placeholder="Search..."
            ref={inputRef}
          />
        </p>
      </form>
    </div>
  );
};

export default ChallengeSix;
