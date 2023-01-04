import axios from "axios";
import * as Constant from "../Constants/SensorDataLinks";

class sensorDataService {
  saveSensorData(sensorData) {
    return axios.post(
      Constant.SENSOR_DATA_BASE_URL + Constant.POST,
      sensorData
    );
  }

  getSensorData() {
    return axios.get(Constant.SENSOR_DATA_BASE_URL + Constant.GET);
  }

  getSensorDataByID(dataId) {
    return axios.get(Constant.SENSOR_DATA_BASE_URL + Constant.FIND + dataId);
  }

  updateSensorDataByID(sensorData, dataId) {
    return axios.put(
      Constant.SENSOR_DATA_BASE_URL + Constant.UPDATE + dataId,
      sensorData
    );
  }

  deleteSensorData(dataId) {
    return axios.delete(
      Constant.SENSOR_DATA_BASE_URL + Constant.DELETE + dataId
    );
  }
}

export default new sensorDataService();
