import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SENSOR_PLOT_UI_ALL } from "../../Constants/SensorPlotLinks";
import SensorPlotService from "../../Services/SensorPlotService";
import ErrorAttribute from "../../Utils/ErrorAttribute";
import FormButton from "../../Utils/FormButton";
import FormInputText from "../../Utils/FormInputText";

const AddSensorPlot = () => {
  const [sensorPlot, setSensorPlot] = useState({
    floor: 0,
    room: 0,
  });
  const [errors, seterrors] = useState(null);

  const renderError = () => {
    return Object.keys(errors).map((error, i) => {
      return <ErrorAttribute key={i} field={error} value={errors[error]} />;
    });
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSensorPlot({ ...sensorPlot, [e.target.name]: e.target.value });
  };

  const saveSensorPlot = (e) => {
    e.preventDefault();
    SensorPlotService.saveSensorPlot(sensorPlot)
      .then((response) => {
        navigate(SENSOR_PLOT_UI_ALL);
      })
      .catch((error) => {
        seterrors(error.response.data);
      });
  };

  const clearSensorPlot = (e) => {
    e.preventDefault();
    setSensorPlot({
      floor: 0,
      room: 0,
    });
  };
  return (
    <div className="grow shadow m-4">
      <div className="flex mx-auto max-w-2xl shadow border-b">
        <div className="px-8 py-8">
          <div className="font-medium text-black text-xl tracking-wide">
            <h1>Add New Sensor Plot</h1>
          </div>
          <FormInputText
            Label="Floor"
            type="number"
            name="floor"
            value={sensorPlot.floor}
            onChange={(e) => handleChange(e)}
          />
          <FormInputText
            Label="Room"
            type="number"
            name="room"
            value={sensorPlot.room}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {errors && <div>{renderError()}</div>}
      </div>

      <div className="flex mx-auto max-w-2xl shadow border-b">
        <FormButton color="1" value="Save" click={saveSensorPlot} />
        <FormButton color="2" value="Reset" click={clearSensorPlot} />
        <FormButton value="Back" click={() => navigate(SENSOR_PLOT_UI_ALL)} />
      </div>
    </div>
  );
};

export default AddSensorPlot;
