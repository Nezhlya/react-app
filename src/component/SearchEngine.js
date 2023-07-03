import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import TemperatureConvertion from "./TemperatureConvertion";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showData(response) {
    setLoaded(true);
    setWeather(response.data);
    setCity("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=701f06352d61835bc4fc894e7b084629&units=metric`;
    axios.get(url).then(showData);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter city name"
        onChange={updateCity}
        className="form"
      />
      <input type="submit" value="Search" className="form" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        {weather && (
          <div className="cityInfo">
            <div>
              <h1>{weather.name}</h1>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
            </div>
            <ul className="cityProps">
              <li>
                <TemperatureConvertion celsius={weather.main.temp}/>
              </li>
              <li>Humidity : {weather.main.humidity}%</li>
              <li>Description : {weather.weather[0].description}</li>
              <li>Wind speed : {Math.round(weather.wind.speed)} km/h</li>
            </ul>
          </div>
        )}
      </div>
    );
  } else {
    return form;
  }
}
