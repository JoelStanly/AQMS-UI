import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import AddSensorData from "./components/Sensor Data/AddSensorData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListSensorData from "./components/Sensor Data/ListSensorData";
import UpdateSensorData from "./components/Sensor Data/UpdateSensorData";
import * as SensorDataConstants from "./Constants/SensorDataLinks";
import * as SensorPlotConstants from "./Constants/SensorPlotLinks";
import ListSensorPlot from "./components/Sensor Plot/ListSensorPlot";
import AddSensorPlot from "./components/Sensor Plot/AddSensorPlot";
import UpdateSensorPlot from "./components/Sensor Plot/UpdateSensorPlot";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* Sensor Data */}
          <Route
            path={SensorDataConstants.SENSOR_DATA_UI_POST}
            element={<AddSensorData />}
          />
          <Route
            path={SensorDataConstants.SENSOR_DATA_UI_ALL}
            element={<ListSensorData />}
          />
          <Route
            path={SensorDataConstants.SENSOR_DATA_UI_UPDATE_ROUTE}
            element={<UpdateSensorData />}
          />

          {/* Sensor Plot */}
          <Route
            path={SensorPlotConstants.SENSOR_PLOT_UI_POST}
            element={<AddSensorPlot />}
          />

          <Route
            path={SensorPlotConstants.SENSOR_PLOT_UI_ALL}
            element={<ListSensorPlot />}
          />
          <Route
            path={SensorPlotConstants.SENSOR_PLOT_UI_UPDATE_ROUTE}
            element={<UpdateSensorPlot />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
