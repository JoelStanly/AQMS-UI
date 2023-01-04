import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SENSOR_PLOT_UI_ALL } from "../../Constants/SensorPlotLinks";
import SensorPlotService from "../../Services/SensorPlotService";
import ErrorAttribute from "../../Utils/ErrorAttribute";
import FormButton from "../../Utils/FormButton";
import FormInputText from "../../Utils/FormInputText";

const UpdateSensorPlot = () => {
  const { sensorid } = useParams();
  const navigate = useNavigate();
  const [sensorPlot, setSensorPlot] = useState({
    plotId: 0,
    sensorid: sensorid,
    floor: 0,
    room: 0,
  });
  const [errors, seterrors] = useState(null);

  const renderError = () => {
    return Object.keys(errors).map((error, i) => {
      return <ErrorAttribute key={i} field={error} value={errors[error]} />;
    });
  };

  const updateSensorPlot = (e) => {
    e.preventDefault();
    SensorPlotService.updateSensorPlotDataByID(sensorPlot, sensorid)
      .then((response) => {
        navigate(SENSOR_PLOT_UI_ALL);
      })
      .catch((error) => {
        seterrors(error.response.data);
      });
  };

  const handleChange = (e) => {
    setSensorPlot({ ...sensorPlot, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SensorPlotService.getSensorPlotByID(sensorid);
        setSensorPlot(response.data);
      } catch (error) {
        seterrors(error.response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grow shadow m-4">
      <div className="flex mx-auto max-w-2xl shadow border-b">
        <div className="px-8 py-8">
          <div className="font-medium text-black text-xl tracking-wide">
            <h1>Update Sensor Plot</h1>
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
        <FormButton value="Update" click={updateSensorPlot} color="1" />
        <FormButton
          value="Cancel"
          click={() => navigate(SENSOR_PLOT_UI_ALL)}
          color="2"
        />
      </div>
    </div>
  );
};

export default UpdateSensorPlot;
