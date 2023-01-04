import React from "react";
import { useNavigate } from "react-router-dom";
import { SENSOR_DATA_UI_UPDATE } from "../../Constants/SensorDataLinks";
import TableButton from "../TableButton";
import TableData from "../TableData";

const TRSensorData = ({ sensorData, deleteSensorData }) => {
  const navigate = useNavigate();

  const editSensorData = (e, dataId) => {
    e.preventDefault();
    navigate(`${SENSOR_DATA_UI_UPDATE}${dataId}`);
  };

  return (
    <tr key={sensorData.dataId}>
      <TableData value={sensorData.dataId} />
      <TableData value={sensorData.sensorid} />
      <TableData value={sensorData.o2} />
      <TableData value={sensorData.co2} />
      <TableData value={sensorData.so2} />
      <TableData value={sensorData.co} />
      <TableData value={sensorData.c} />
      <td className="text-center border border-blue-600 px-6 py-4 whitespace-nowrap font-medium text-sm">
        <TableButton
          value="Edit"
          click={(e, dataId) => editSensorData(e, sensorData.dataId)}
        />
        <TableButton
          value="Delete"
          click={(e, dataId) => deleteSensorData(e, sensorData.dataId)}
        />
      </td>
    </tr>
  );
};

export default TRSensorData;
