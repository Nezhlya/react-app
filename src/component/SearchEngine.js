import React, { useState } from "react";
import axios from "axios";

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
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        {weather && (
          <div>
            <h2>{weather.name}</h2>
            <ul>
              <li>Temperature : {Math.round(weather.main.temp)}℃</li>
              <li>Humidity : {weather.main.humidity}%</li>
              <li>Description : {weather.description}</li>
              <li>Wind speed : {Math.round(weather.wind.speed)} km/h</li>
              <li>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  } else {
    return form;
  }
}
