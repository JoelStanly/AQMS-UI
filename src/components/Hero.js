import React from "react";
import { useNavigate } from "react-router-dom";
import { SENSOR_DATA_UI_ALL } from "../Constants/SensorDataLinks";
import { SENSOR_PLOT_UI_ALL } from "../Constants/SensorPlotLinks";
import FormButton from "../Utils/FormButton";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="grow bg-blue-600 m-0 shadow-md flex flex-col justify-center items-center">
      <h1 className="text-white py-10 font-thin italic text-4xl flex items-center">
        Air Quality Management System
      </h1>
      <div className="flex">
        <FormButton
          value="Sensor Data"
          color="3"
          click={() => navigate(SENSOR_DATA_UI_ALL)}
        />

        <FormButton
          value="Sensor Plot"
          color="3"
          click={() => navigate(SENSOR_PLOT_UI_ALL)}
        />
      </div>
    </div>
  );
};

export default Hero;
