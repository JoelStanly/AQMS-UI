import React from "react";

const THSensorPlot = ({ value, location }) => {
  return (
    <th
      className={`text-${location} font-bold  border border-blue-600 text-blue-600 tracking-wider py-3 px-6`}
    >
      {value}
    </th>
  );
};

export default THSensorPlot;
