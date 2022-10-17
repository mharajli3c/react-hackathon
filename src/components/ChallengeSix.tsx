import { useEffect, useRef } from "react";

const ChallengeSix = () => {
  const inputRef = useRef(null);

  // Utilize useEffect to auto focus the input element via the ref
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="m-2">
      <form>
        <p>
          {/* Utilize a ref on this input to auto focus on page load */}
          <input ref={inputRef}
            className="border-solid border-black border-2"
            type="text"
            name="search"
            placeholder="Search..."
          />
        </p>
      </form>
    </div>
  );
};

export default ChallengeSix;
