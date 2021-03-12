import React from "react";

import "./CustomBtn.css";

let CustomBtn = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} className="CustomBtn">
      {text}
    </button>
  );
};

export default CustomBtn;
