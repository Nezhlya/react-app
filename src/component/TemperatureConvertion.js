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
      <div className="SearchEngine">
        <span>{Math.round(props.celsius)}</span>
        <span>
          ° C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round(fahrenheit())}</span>
        <span>
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
