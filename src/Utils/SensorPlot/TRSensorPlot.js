import React from "react";
import { useNavigate } from "react-router-dom";
import { SENSOR_PLOT_UI_UPDATE } from "../../Constants/SensorPlotLinks";
import TableData from "../../Utils/TableData";
import TableButton from "../../Utils/TableButton";

const TRSensorPlot = ({ sensorPlot, deleteSensorPlot }) => {
  const navigate = useNavigate();

  const editSensorPlot = (e, sensorid) => {
    e.preventDefault();
    navigate(`${SENSOR_PLOT_UI_UPDATE}${sensorid}`);
  };
  return (
    <tr key={sensorPlot.plotId}>
      <TableData value={sensorPlot.plotId} />
      <TableData value={sensorPlot.sensorid} />
      <TableData value={sensorPlot.floor} />
      <TableData value={sensorPlot.room} />
      <td className="text-center border border-blue-600 px-6 py-4 whitespace-nowrap font-medium text-sm">
        <TableButton
          value="Edit"
          click={(e, plotId) => editSensorPlot(e, sensorPlot.sensorid)}
        />
        <TableButton
          value="Delete"
          click={(e, sensorid) => deleteSensorPlot(e, sensorPlot.sensorid)}
        />
      </td>
    </tr>
  );
};

export default TRSensorPlot;
