import React from "react";

const OutlineBtn = ({ text, onClick, type = "button", className = "" }) => {
  const classes = className.includes("outline") ? className : `outline ${className}`;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {text}
    </button>
  );
};


export default OutlineBtn;
