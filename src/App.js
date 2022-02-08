import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1 id="city">city</h1>
            <ul>
              <li>
                Last updated: <span id="date"></span>
              </li>
              <li id="description"></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img src="" alt="Clear" id="icon" className="float-left" />
                <div className="float-left">
                  <strong id="temperature"></strong>
                  <span className="units"> °C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"></span> m/h
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/sleepykanguru22/weather-react">
          Open source project
        </a>
        by Jasmin Carter
      </footer>
    </div>
  );
}
