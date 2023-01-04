import React from "react";

const TableData = ({ value }) => {
  return (
    <td className="text-left  border border-blue-600 px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-white">{value}</div>
    </td>
  );
};

export default TableData;
