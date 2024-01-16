// TextBoxWithChips.js
import React, { useState, useEffect, useRef } from "react";
import Chip from "./Chip";
import AutoCompleteList from "./AutoCompleteList";
import "./TextBoxWithChips.css"; // Import your CSS file for styling

const TextBoxWithChips = ({ data }) => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [autoCompleteItems, setAutoCompleteItems] = useState(data);
  const [filteredItems, setFilteredItems] = useState([]);
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [highlightedChipIndex, setHighlightedChipIndex] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    // Filter items based on the input value
    const value = inputValue.trim().toLowerCase();
    const filtered = autoCompleteItems.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredItems(filtered);
  }, [inputValue, autoCompleteItems]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    setHighlightedChipIndex(-1);

    // Show AutoCompleteList only if the user starts typing
    if (value.length > 0) {
      setShowAutoComplete(true);
    } else {
      setShowAutoComplete(false);
    }
  };

  const handleItemClick = (item) => {
    // Add the clicked item to the chips list and remove it from the autoCompleteItems
    setChips([...chips, item]);
    setAutoCompleteItems(autoCompleteItems.filter((i) => i !== item));
    setInputValue("");
    setShowAutoComplete(false);
    setHighlightedChipIndex(-1);
  };

  const handleChipRemove = (chipIndex) => {
    // Remove the chip at the specified index from the chips list
    const removedChip = chips[chipIndex];
    setChips(chips.filter((_, index) => index !== chipIndex));
    setHighlightedChipIndex(-1); // Reset highlighted chip index
    inputRef.current.focus();

    // Add the removed chip back to the autoCompleteItems
    setAutoCompleteItems([...autoCompleteItems, removedChip]);
  };

  const handleKeyUp = (event) => {
    if (
      event.key === "Backspace" &&
      inputValue === "" &&
      chips.length > 0 &&
      highlightedChipIndex === -1
    ) {
      // Highlight the last chip when Backspace is pressed and input is empty
      setHighlightedChipIndex(chips.length - 1);
    } else if (event.key === "Backspace" && highlightedChipIndex !== -1) {
      // Remove the highlighted chip on subsequent Backspace presses
      handleChipRemove(highlightedChipIndex);
    }
  };

  const highlightMatchedText = (item) => {
    console.log("highlightMatchedText", item);
    const lowerCaseItem = item.toLowerCase();
    const lowerCaseInput = inputValue.toLowerCase();

    // If there's a match, return a JSX element with the matching part highlighted
    if (lowerCaseItem.includes(lowerCaseInput)) {
      const startIndex = lowerCaseItem.indexOf(lowerCaseInput);
      const endIndex = startIndex + lowerCaseInput.length;

      return (
        <>
          {item.substring(0, startIndex)}
          <span className="highlight">
            {item.substring(startIndex, endIndex)}
          </span>
          {item.substring(endIndex)}
        </>
      );
    }

    return item.name; // If no match, return the original item
  };

  const handleChipClick = (chipIndex) => {
    // Remove the clicked chip from the chips list
    const removedChip = chips[chipIndex];
    setChips(chips.filter((_, index) => index !== chipIndex));
    setHighlightedChipIndex(-1); // Reset highlighted chip index
    inputRef.current.focus();

    // Add the removed chip back to the autoCompleteItems
    setAutoCompleteItems([...autoCompleteItems, removedChip]);
  };

  return (
    <div className="text-box-with-chips">
      <div className="chip-input-container">
        {chips.map((chip, index) => (
          <Chip
            key={index}
            label={chip.name}
            imageUrl={chip.imageUrl}
            onRemove={() => handleChipRemove(index)}
            // onClick={() => handleChipClick(index)}
            highlighted={highlightedChipIndex === index}
          />
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          onFocus={() => setShowAutoComplete(true)}
          placeholder="Add new users..."
          className="chip-input"
        />
      </div>
      {showAutoComplete && filteredItems.length > 0 && (
        <AutoCompleteList
          items={filteredItems}
          onItemClick={handleItemClick}
          inputRef={inputRef}
          highlightMatchedText={highlightMatchedText}
        />
      )}
    </div>
  );
};

export default TextBoxWithChips;
