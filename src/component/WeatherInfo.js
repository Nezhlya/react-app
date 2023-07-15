import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import TemperatureConvertion from "./TemperatureConvertion";
import "./SearchEngine.css";

export default function WeatherInfo(props) {
  return (
    <div className="cityInfo">
      <div>
        <div className="text-center">
          <h1>{props.data.city}</h1>
          <WeatherIcon code={props.data.icon} size={70} />
          <p> {props.data.weatherMain}</p>
           <TemperatureConvertion
              celsius={Math.round(props.data.temperature)}
            />
        </div>
        
        <div className="row m-3 text-center">
          <div className="col">
            <b>Weather</b> : {props.data.description}{" "}
          </div>
          <div className="col">
            <b>Humidity</b> : {props.data.humidity} %
          </div>
          <div className="col">
            <b>Wind speed</b> : {Math.round(props.data.windSpeed)} m/s
          </div>
        </div>
        
      </div>
    </div>
  );
}
