import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import Weatherforecast from "./Weatherforecast";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setweatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setweatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      time: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "ff417f6e1553tb7e790a6334bb9cocff";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div className="Weather p-4 rounded-4 mb-5 mt-5 pe-2">
        <form className="justify-content-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a city..."
            className=" m-2 p-1 textBox rounded-3 border border-black"
            onChange={handleCityChange}
          />
          <input
            type="submit"
            value="Search"
            className=" p-1 rounded-2 searchButton"
          />
        </form>
        <Weatherinfo info={weatherData} />
        <Weatherforecast cityinfo={weatherData.city} />
        <footer className="mt-3">
          This project is coded by{" "}
          <a
            href="https://github.com/ziyandadavashe/my-react-app-project"
            target="blank"
          >
            Ziyanda Davashe{" "}
          </a>
          and is hosted on{" "}
          <a href="https://github.com/cosylily/react-astro-lily" target="blank">
            Netlify
          </a>
          .
        </footer>
      </div>
    );
  } else {
    search(props.defaultCity);
    return "Loading...";
  }
}
