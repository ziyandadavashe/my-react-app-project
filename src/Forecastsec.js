import React from "react";
import Weathericon from "./Weathericon";

export default function ForecastSection(props) {
  let time = new Date(props.data.time * 1000);
  let day = time.getDay();
  let month = time.getMonth();
  let date = time.getDate();
  let tempMax = Math.round(props.data.temperature.maximum);
  let tempMin = Math.round(props.data.temperature.minimum);

  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  return (
    <div className="text-center p-3">
      <div className="forecast-grid mt-3 p-2">
        <div className="forecast-day d-flex flex-row justify-content-between">
          <div>
            {date}/{months[month]}
          </div>
          <div>{days[day]}</div>
        </div>{" "}
        <div>
          <Weathericon icon={props.data.condition.icon} />
        </div>{" "}
        <div className="forecast-temperatures d-flex justify-content-between">
          {" "}
          <span className="forecast-temperature-max">{tempMax}°</span>
          <span className="forecast-temperature-min">{tempMin}°</span>
        </div>
      </div>
    </div>
  );
}
