import React from "react";

const FormButton = ({ value, click, color }) => {
  color = Number(color);
  if (color === 1) {
    return (
      <div className="pl-8 py-4 mx-2">
        <button
          onClick={click}
          className={`bg-blue-900 px-8 py-2 rounded font-medium italic text-white hover:bg-blue-500`}
        >
          {value}
        </button>
      </div>
    );
  } else if (color === 2) {
    return (
      <div className="pl-8 py-4">
        <button
          onClick={click}
          className={`bg-red-900 px-8 py-2 rounded font-medium italic text-white hover:bg-red-500`}
        >
          {value}
        </button>
      </div>
    );
  } else {
    return (
      <div className="pl-8 py-4">
        <button
          onClick={click}
          className={`bg-gray-900 px-8 py-2 rounded font-medium italic text-white hover:bg-gray-500`}
        >
          {value}
        </button>
      </div>
    );
  }
};

export default FormButton;
