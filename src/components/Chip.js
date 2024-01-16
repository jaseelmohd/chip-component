// Chip.js
import React from "react";

const Chip = ({ label, imageUrl, onRemove, onClick, highlighted }) => {
  const image = require(`../assets/images/${imageUrl}`);

  return (
    <div
      className={`chip${highlighted ? " highlighted" : ""}`}
      onClick={onClick}
    >
      <img src={image} alt="chip-icon" className="chip-image" />
      <span className="chip-label">{label}</span>
      <span className="remove-icon" onClick={onRemove}>
        X
      </span>
    </div>
  );
};

export default Chip;
