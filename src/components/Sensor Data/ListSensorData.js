import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SENSOR_DATA_UI_POST } from "../../Constants/SensorDataLinks";
import SensorDataService from "../../Services/SensorDataService";
import ErrorAttribute from "../../Utils/ErrorAttribute";
import FormButton from "../../Utils/FormButton";
import Loading from "../../Utils/Loading";
import THSensorData from "../../Utils/SensorData/THSensorData";
import TRSensorData from "../../Utils/SensorData/TRSensorData";

const ListSensorData = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [sensorDatas, setSensorDatas] = useState(null);
  const [errors, seterrors] = useState(null);

  const renderError = () => {
    return Object.keys(errors).map((error, i) => {
      return <ErrorAttribute key={i} field={error} value={errors[error]} />;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await SensorDataService.getSensorData();
        setSensorDatas(response.data);
      } catch (error) {
        seterrors(error.response.data);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteSensorData = (e, dataId) => {
    e.preventDefault();
    SensorDataService.deleteSensorData(dataId).then((res) => {
      if (sensorDatas) {
        setSensorDatas((prevData) => {
          return prevData.filter((sensorData) => sensorData.dataId !== dataId);
        });
      }
    });
  };

  return (
    <div className="grow container mx-auto my-8">
      <div className="h-12 flex justify-center mb-8">
        <FormButton
          color="1"
          value="Add Sensor Data"
          click={() => navigate(SENSOR_DATA_UI_POST)}
        />
      </div>
      {loading && (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      )}
      {errors && <div>{renderError()}</div>}
      {!loading && (
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <THSensorData value="ID" location="left" />
                <THSensorData value="Sensor ID" location="left" />
                <THSensorData value="O2" location="left" />
                <THSensorData value="CO2" location="left" />
                <THSensorData value="SO2" location="left" />
                <THSensorData value="CO" location="left" />
                <THSensorData value="C" location="left" />
                <THSensorData value="Actions" location="center" />
              </tr>
            </thead>
            <tbody className="bg-gray-500">
              {sensorDatas.map((sensorData) => (
                <TRSensorData
                  sensorData={sensorData}
                  key={sensorData.dataId}
                  deleteSensorData={deleteSensorData}
                ></TRSensorData>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListSensorData;
