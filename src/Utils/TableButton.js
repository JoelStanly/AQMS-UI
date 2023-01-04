import React from "react";

const TableButton = ({ click, value }) => {
  return (
    <button
      className="text-white hover:text-sky-300 px-4 hover:cursor-pointer"
      onClick={click}
    >
      {value}
    </button>
  );
};

export default TableButton;
