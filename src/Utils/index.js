export const highlightText = (text, term) => {
  const parts = text.split(new RegExp(`(${term})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === term.toLowerCase() ? <span key={index} style={{ color: 'blue' }}>{part}</span> : part
  );
};