import { useEffect, useState } from "react";
import "../styles/Navigation.css";
export default function Navigation() {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  useEffect(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const day = currentDate.getDay();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    setHours(hours);
    setMinutes(minutes);
    setDate(`${day}/${month}/${year}`);
  }, []);
  return (
    <nav className="navigation">
      <span className="heading">SALAKHIDDINOV</span>
      <div>
        <span className="time">{`${date}`} |</span>
        <span className="time">{`${hours}:${
          minutes.toString().length === 1 ? "0" : ""
        }${minutes}`}</span>
      </div>
    </nav>
  );
}
