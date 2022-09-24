import { useState } from "react";
import startButton from "../images/start-button.png";
import "../styles/Navigation.css";

export default function Navigation(props) {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  setInterval(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    setHours(hours);
    setMinutes(minutes);
  }, 1000);

  function toggleWindow() {
    props.toggleWin();
  }

  return (
    <>
      <nav className="navigation">
        <div className="start-button-wrapper" onClick={toggleWindow}>
          <div className="start-button">
            <img src={startButton} alt="Start" />
            <span>Start</span>
          </div>
        </div>
        <div>
          <div className="date-wrapper">
            <div className="date">
              <span className="time bold">{`${hours}:${
                minutes.toString().length === 1 ? "0" : ""
              }${minutes}`}</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
