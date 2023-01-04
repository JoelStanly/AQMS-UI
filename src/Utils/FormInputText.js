import React from "react";

const FormInputText = ({ Label, type, name, value, onChange }) => {
  //<FormInputText Label = "Sensor ID" type = "text" name= "sensorid" value={sensorData.sensorid}>
  return (
    <div id={name} className="items-center justify-center h-14 w-full my-4">
      <label className="block text-gray-700 text-lg font-normal italic">
        {Label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="h-10 w-96 border mt-2 p-2"
      ></input>
    </div>
  );
};

export default FormInputText;
