//* Import Utils*/
import { highlightText } from "../Utils";

const RenderItem = ({ item, term, index, focusedIndex, setFocusedIndex }) => {
  const itemsMatch = item.items.some((i) => i.toLowerCase().includes(term));
  return (
    <li
      className={`list-item ${index === focusedIndex ? "focused" : ""}`}
      key={item.id}
      style={{
        backgroundColor: index === focusedIndex ? "yellow" : "transparent",
      }}
      onMouseEnter={() => setFocusedIndex(index)}
      onClick={() => alert(`Selected: ${item.name}`)}
    >
      {highlightText(item.id, term)}
      <br />
      {highlightText(item.name, term)}
      <br />
      {itemsMatch ? (
        <span className="dot">- {term} found in items</span>
      ) : (
        item.items.map((itm, idx) => (
          <span key={idx}>
            {highlightText(itm, term)}
            {idx < item.items.length - 1 ? ", " : ""}
          </span>
        ))
      )}
      <br />
      {highlightText(item.address, term)}
      <br />
      {highlightText(item.pincode, term)}
    </li>
  );
};

export default RenderItem;
