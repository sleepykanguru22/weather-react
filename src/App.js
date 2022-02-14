import React from "react";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />

        <footer>
          <a href="https://github.com/sleepykanguru22/weather-react">
            Open source project
          </a>
          by Jasmin Carter
        </footer>
      </div>
    </div>
  );
}
