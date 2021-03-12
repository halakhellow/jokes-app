import React from "react";

import "./CustomBtn.css";

let CustomBtn = ({ text, handleClick, clearBtn }) => {
  return (
    <button
      onClick={handleClick}
      className={`CustomBtn ${clearBtn && "clearBtn"}`}
    >
      {text}
    </button>
  );
};

export default CustomBtn;
