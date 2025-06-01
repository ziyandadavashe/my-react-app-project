import React from "react";

export default function Weathertemp(props) {
  return (
    <div className="temp col-4 text-align-center pt-3 rounded-start">
      {" "}
      {Math.round(props.temp)} <span className="unit">℃</span>{" "}
    </div>
  );
}
