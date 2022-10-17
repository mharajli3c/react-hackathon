import React, { useState, useMemo, useCallback } from "react";
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

  const handleSearchChange = (searchText: string) => {
    setIsDebounced(true);
    handleSearchChangeDebounce(searchText);
  }

  const handleSearchChangeDebounce = debounce((searchText: string) => {
    console.log(`Search value changed: ${searchText}`);

    // Filter items based on search
    const filtered = SearchItems.filter(({ name }) => name.includes(searchText));
    setFilteredItems(filtered);
    setIsDebounced(false);
  }, 1000);
  
  const onHandleSearchChangeMemo = useMemo(() => {
    handleSearchChange;
  }
  , []);

  return (
    <div className="m-2">
      <form>
        <p>
          <input
            className="border-solid border-black border-2"
            type="text"
            name="search"
            placeholder="Search..."
            onChange={(e) => handleSearchChange(e.target.value)}
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
