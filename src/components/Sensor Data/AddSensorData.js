import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SENSOR_DATA_UI_ALL } from "../../Constants/SensorDataLinks";
import SensorDataService from "../../Services/SensorDataService";
import ErrorAttribute from "../../Utils/ErrorAttribute";
import FormButton from "../../Utils/FormButton";
import FormInputText from "../../Utils/FormInputText";
const AddSensorData = () => {
  const [sensorData, setsensorData] = useState({
    sensorid: "",
    o2: 0,
    co2: 0,
    so2: 0,
    co: 0,
    c: 0,
  });
  const [errors, seterrors] = useState(null);

  const renderError = () => {
    return Object.keys(errors).map((error, i) => {
      return <ErrorAttribute key={i} field={error} value={errors[error]} />;
    });
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setsensorData({ ...sensorData, [e.target.name]: e.target.value });
  };

  const saveSensorData = (e) => {
    e.preventDefault();
    SensorDataService.saveSensorData(sensorData)
      .then((response) => {
        navigate(SENSOR_DATA_UI_ALL);
      })
      .catch((error) => {
        seterrors(error.response.data);
      });
  };

  const clearSensorData = (e) => {
    e.preventDefault();
    setsensorData({ sensorid: "", o2: 0, co2: 0, so2: 0, co: 0, c: 0 });
  };

  return (
    <div className="grow shadow m-4">
      <div className="flex mx-auto max-w-2xl shadow border-b">
        <div className="px-8 py-8">
          <div className="font-medium text-black text-xl tracking-wide">
            <h1>Add new Sensor Data</h1>
          </div>
          <FormInputText
            Label="Sensor ID"
            type="text"
            name="sensorid"
            value={sensorData.sensorid}
            onChange={(e) => handleChange(e)}
          />
          <FormInputText
            Label="O2"
            type="number"
            name="o2"
            value={sensorData.o2}
            onChange={(e) => handleChange(e)}
          />
          <FormInputText
            Label="CO2"
            type="number"
            name="co2"
            value={sensorData.co2}
            onChange={(e) => handleChange(e)}
          />
          <FormInputText
            Label="SO2"
            type="number"
            name="so2"
            value={sensorData.so2}
            onChange={(e) => handleChange(e)}
          />
          <FormInputText
            Label="CO"
            type="number"
            name="co"
            value={sensorData.co}
            onChange={(e) => handleChange(e)}
          />
          <FormInputText
            Label="C"
            type="number"
            name="c"
            value={sensorData.c}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {errors && <div>{renderError()}</div>}
      </div>
      <div className="flex mx-auto max-w-2xl shadow border-b">
        <FormButton color="1" value="Save" click={saveSensorData} />
        <FormButton color="2" value="Reset" click={clearSensorData} />
        <FormButton value="Back" click={() => navigate(SENSOR_DATA_UI_ALL)} />
      </div>
    </div>
  );
};

export default AddSensorData;
