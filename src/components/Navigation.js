import { useState } from "react";
import startButton from "../images/start-button.png";
import "../styles/Navigation.css";
export default function Navigation() {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  setInterval(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const day = currentDate.getDay();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    setHours(hours);
    setMinutes(minutes);
    setDate(`${day}/${month}/${year}`);
  }, 1000);

  return (
    <>
      <nav className="navigation">
        <div className="start-button-wrapper">
          <div className="start-button">
            <img src={startButton} alt="Start" />
            <span>Start</span>
          </div>
        </div>
        <div>
          <div className="date-wrapper">
            <div className="date">
              <span className="time">{`${date}`}</span>
              <span className="time">{`${hours}:${
                minutes.toString().length === 1 ? "0" : ""
              }${minutes}`}</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
