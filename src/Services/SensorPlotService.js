import axios from "axios";
import * as Constant from "../Constants/SensorPlotLinks";

class sensorPlotServcie {
  saveSensorPlot(sensorPlot) {
    return axios.post(
      Constant.SENSOR_PLOT_BASE_URL + Constant.POST,
      sensorPlot
    );
  }
  getSensorPlot() {
    return axios.get(Constant.SENSOR_PLOT_BASE_URL + Constant.GET);
  }

  getSensorPlotByID(sensorid) {
    return axios.get(Constant.SENSOR_PLOT_BASE_URL + Constant.FIND + sensorid);
  }

  updateSensorPlotDataByID(sensorPlot, sensorid) {
    return axios.put(
      Constant.SENSOR_PLOT_BASE_URL + Constant.UPDATE + sensorid,
      sensorPlot
    );
  }

  deleteSensorPlot(sensorid) {
    return axios.delete(
      Constant.SENSOR_PLOT_BASE_URL + Constant.DELETE + sensorid
    );
  }
}

export default new sensorPlotServcie();
