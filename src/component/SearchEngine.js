import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function SearchEngine(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function searchCity(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      pressure: response.data.main.pressure,
      visibility: response.data.visibility,
      clouds: response.data.clouds.all,
      humidity: response.data.main.humidity,
      weatherMain: response.data.weather[0].main,
      description: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      coordinates: response.data.coord,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "701f06352d61835bc4fc894e7b084629";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(searchCity);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter city name"
            onChange={updateCity}
            className="form"
          />
          <input type="submit" value="Search" className="form" />
        </form>
        <div className="row">
          <div className="col">
            <WeatherInfo data={weather} />
          </div>
          <div className="forecastArea">
          <div className="row">
           
                  <h3 className="text-center">Daily Forecast</h3>
                  <WeatherForecast coordinates={weather.coordinates} />
               
          </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading. . .";
  }
}
