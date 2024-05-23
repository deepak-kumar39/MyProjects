import { useRef, useState } from "react";
import { data } from "../data";

const useUserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const inputRef = useRef(null);
  const listRef = useRef(null);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFocusedIndex(-1);

    if (term === '') {
      setFilteredData([]);
      return;
    }

    const results = data.filter(item =>
      item.id.toLowerCase().includes(term) ||
      item.name.toLowerCase().includes(term) ||
      item.items.some(i => i.toLowerCase().includes(term)) ||
      item.address.toLowerCase().includes(term) ||
      item.pincode.toLowerCase().includes(term)
    );

    setFilteredData(results);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(prev => Math.min(prev + 1, filteredData.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      e.preventDefault();
      alert(`Selected: ${filteredData[focusedIndex].name}`);
    }
  };

  return {
    searchTerm,
    filteredData,
    focusedIndex,
    setFocusedIndex,
    inputRef,
    listRef,
    handleSearch,
    handleKeyDown
  };
}

export default useUserSearch;