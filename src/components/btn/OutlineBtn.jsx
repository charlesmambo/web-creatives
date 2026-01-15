import React from "react";

const OutlineBtn = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`outline ${className}`}
    >
      {text}
    </button>
  );
};

export default OutlineBtn;
