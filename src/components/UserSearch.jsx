//* Import Packages */
import { useEffect } from "react";

//* Import Components */
import RenderItem from "./RenderItem";

//* Import hooks */
import useUserSearch from "../hooks/useUserSearch";

const UserSearch = () => {
  //custom hook for all the logic
  const {
    focusedIndex,
    listRef,
    inputRef,
    searchTerm,
    filteredData,
    setFocusedIndex,
    handleSearch,
    handleKeyDown,
  } = useUserSearch();

  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const listItems = listRef.current.querySelectorAll(".list-item");
      if (listItems[focusedIndex]) {
        listItems[focusedIndex].scrollIntoView({ block: "nearest" });
      }
    }
  }, [focusedIndex]);

  return (
    <div className="app">
      <input
        ref={inputRef}
        className="input-search"
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="Search users by ID, address, name..."
      />

      <ul className="list-container" ref={listRef}>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <RenderItem
              item={item}
              setFocusedIndex={setFocusedIndex}
              focusedIndex={focusedIndex}
              index={index}
              term={searchTerm}
            />
          ))
        ) : (
          <li className="list-item empty">No search results found</li>
        )}
      </ul>
    </div>
  );
};

export default UserSearch;
