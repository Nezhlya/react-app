import React, { useState } from "react";
import "./SearchEngine.css";

export default function TemperatureConvertion(props) {
  let [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="convertion">
        <span>{Math.round(props.celsius)}</span>
        <span className="unit"><sup> °C |</sup>
         
          <a href="/" onClick={showFahrenheit}>
            <sup> °F</sup>
           
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="convertion">
        <span>{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}><sup>
            °C </sup>
            
          </a><sup>
          | °F</sup>
        </span>
      </div>
    );
  }
}
