import React from "react";

const ErrorAttribute = ({ field, value }) => {
  return (
    <div className="flex items-center p-2 px-4 w-full max-w-xs text-white bg-red-900 rounded-lg shadow my-2">
      <div className="text-sm font-normal ">
        {field.charAt(0).toUpperCase() + field.slice(1)} {value}
      </div>
    </div>
  );
};

export default ErrorAttribute;
