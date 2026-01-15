import React from 'react';
import '../btn/Btn.css';

function PrimaryBtn({ text, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`primary-btn ${className}`}
    >
      {text}
    </button>
  );
}

export default PrimaryBtn;
