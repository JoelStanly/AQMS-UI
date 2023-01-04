import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SENSOR_PLOT_UI_POST } from "../../Constants/SensorPlotLinks";
import SensorPlotService from "../../Services/SensorPlotService";
import ErrorAttribute from "../../Utils/ErrorAttribute";
import FormButton from "../../Utils/FormButton";
import Loading from "../../Utils/Loading";
import THSensorPlot from "../../Utils/SensorPlot/THSensorPlot";
import TRSensorPlot from "../../Utils/SensorPlot/TRSensorPlot";

const ListSensorPlot = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [sensorPlots, setSensorPlots] = useState(null);
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
        const response = await SensorPlotService.getSensorPlot();
        setSensorPlots(response.data);
      } catch (error) {
        seterrors(error.response.data);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const deleteSensorPlot = (e, sensorid) => {
    e.preventDefault();
    SensorPlotService.deleteSensorPlot(sensorid).then((res) => {
      if (sensorPlots) {
        setSensorPlots((prevPlot) => {
          return prevPlot.filter(
            (sensorPlot) => sensorPlot.sensorid !== sensorid
          );
        });
      }
    });
  };

  return (
    <div className="grow container mx-auto my-8">
      <div className="h-12 flex justify-center mb-8">
        <FormButton
          color="1"
          value="Add Sensor Plot"
          click={() => navigate(SENSOR_PLOT_UI_POST)}
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
                <THSensorPlot value="ID" location="left" />
                <THSensorPlot value="Sensor ID" location="left" />
                <THSensorPlot value="Floor" location="left" />
                <THSensorPlot value="Room" location="left" />
                <THSensorPlot value="Actions" location="center" />
              </tr>
            </thead>
            <tbody className="bg-gray-500">
              {sensorPlots.map((sensorPlot) => (
                <TRSensorPlot
                  sensorPlot={sensorPlot}
                  key={sensorPlot.plotId}
                  deleteSensorPlot={deleteSensorPlot}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListSensorPlot;
