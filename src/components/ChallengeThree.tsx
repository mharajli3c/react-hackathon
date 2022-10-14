import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

const SearchItems = [
  {
    id: 1,
    name: "Item 1",
  },
  {
    id: 2,
    name: "Item 2",
  },
  {
    id: 3,
    name: "Item 3",
  },
  {
    id: 4,
    name: "Item 4",
  },
  {
    id: 5,
    name: "Item 5",
  },
];

const ChallengeThree = () => {
  const [isDebounced, setIsDebounced] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  // Create a useMemo or useCallback instance to debounce the search for 1 second
  // To verify, start typing into the search input. While you type, verify that the isDebounced value stays true.
  // After you stop typing, the value of isDebounced should be set to false after 1 second.

  // MODIFY THIS: Focus on using useMemo or useCallback to utilize debounce.
  const setToFalse = () => {
    
  }

  const handleSearchChange = (searchText: string) => {
    console.log(`Search value changed: ${searchText}`);
    
    // Filter items based on search
    const filtered = SearchItems.filter(({ name }) => name.includes(searchText));
    setFilteredItems(filtered)
    setIsDebounced(false)
  };

  const debouncedChangeHandler = useCallback( debounce(handleSearchChange, 1000)
  , []);

  return (
    <div className="flex flex-col items-center m-2">
      <h1 className="text-blue-700 font-semibold">Challenge 3</h1>
      <form>
        <p>
          <input
            className="border-solid border-black border-2"
            type="text"
            name="search"
            placeholder="Search..."
            onChange={(e) => {setIsDebounced(true), debouncedChangeHandler(e.target.value)}}
          />
        </p>
      </form>

      <p>Is Debounced: {isDebounced.toString()}</p>

      <hr />

      {filteredItems.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
    </div>
  );
};

export default ChallengeThree;
