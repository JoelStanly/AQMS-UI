import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SENSOR_DATA_UI_ALL } from "../../Constants/SensorDataLinks";
import SensorDataService from "../../Services/SensorDataService";
import ErrorAttribute from "../../Utils/ErrorAttribute";
import FormButton from "../../Utils/FormButton";
import FormInputText from "../../Utils/FormInputText";

const UpdateSensorData = () => {
  const { dataId } = useParams();
  const navigate = useNavigate();
  const [sensorData, setSensorData] = useState({
    dataId: Number(dataId),
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
  const updateSensorData = (e) => {
    e.preventDefault();
    SensorDataService.updateSensorDataByID(sensorData, dataId)
      .then((response) => {
        navigate(SENSOR_DATA_UI_ALL);
      })
      .catch((error) => {
        seterrors(error.response.data);
      });
  };

  const handleChange = (e) => {
    setSensorData({ ...sensorData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SensorDataService.getSensorDataByID(dataId);
        setSensorData(response.data.sensorData);
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
            <h1>Update Sensor Data</h1>
          </div>
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
        <FormButton value="Update" click={updateSensorData} color="1" />
        <FormButton
          value="Cancel"
          click={() => navigate(SENSOR_DATA_UI_ALL)}
          color="2"
        />
      </div>
    </div>
  );
};

export default UpdateSensorData;
