import React from "react";
import Formatteddate from "./FormattedDate";
import Weathericon from "./Weathericon";
import Weathertemp from "./Weathertemp";
export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="Main col-8 me">
            <div className="placeInfo mt-3">
              <div className="city">{props.info.city}</div>
              <div className="time">
                <Formatteddate timestamp={props.info.time} />
              </div>
            </div>
            <div className="mainInfo row justify-content-start mt-3 ">
              <div className="otherInfo col-8 rounded-end pt-3">
                <ul className="">
                  <li>Humidity: {Math.round(props.info.humidity)}%</li>
                  <li>Wind speed: {Math.round(props.info.wind)}km/h</li>
                </ul>
              </div>
              <Weathertemp temp={props.info.temperature} />
            </div>
          </div>
          <div className="descriptions col-4 pt-3 ps-2">
            <div className="tempLogo mt-2 mb-2">
              <Weathericon icon={props.info.icon} />
            </div>
            <div className="weatherDescribe text-uppercase text-center">
              {props.info.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
