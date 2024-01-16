// AutoCompleteList.js
import React from "react";

const loadImage = (imageUrl) => {
  try {
    return require(`../assets/images/${imageUrl}`);
  } catch (err) {
    return require("../assets/images/avatar_1.png");
  }
};

const AutoCompleteList = ({
  items,
  onItemClick,
  inputRef,
  highlightMatchedText,
}) => {
  return (
    <ul className="auto-complete-list">
      {items.map((item, index) => (
        <li key={index} onClick={() => onItemClick(item)}>
          <div className="auto-complete-list-item">
            <img
              src={loadImage(item.imageUrl)}
              alt="avatar"
              className="avatar-image"
            />
            <p className="list-item-name">{highlightMatchedText(item.name)}</p>
            <span className="list-item-email">{item.email}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AutoCompleteList;
