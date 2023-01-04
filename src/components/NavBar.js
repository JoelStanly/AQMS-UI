import React from "react";
import { useNavigate } from "react-router-dom";
import { SENSOR_DATA_UI_ALL } from "../Constants/SensorDataLinks";
import { SENSOR_PLOT_UI_ALL } from "../Constants/SensorPlotLinks";
import FormButton from "../Utils/FormButton";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 m-0 shadow-md flex">
      <div className="h-16 px-12 flex items-center grow">
        <p
          className="text-blue-600 font-bold cursor-pointer"
          onClick={() => navigate("")}
        >
          Air Quality Management System
        </p>
      </div>
      <div className="flex items-center">
        <FormButton
          value="Sensor Data"
          color="1"
          click={() => navigate(SENSOR_DATA_UI_ALL)}
        />

        <FormButton
          value="Sensor Plot"
          color="1"
          click={() => navigate(SENSOR_PLOT_UI_ALL)}
        />
      </div>
    </div>
  );
};

export default NavBar;
