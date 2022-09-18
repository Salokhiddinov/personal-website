import { useState } from "react";
// import "../styles/HomePage.modules.css";
import NavWindow from "../components/NavWindow";
import Navigation from "../components/Navigation";
import Applications from "../components/Applications";
import About from "../components/About";

export default function HomePage() {
  const [navWinOpen, setNavWinOpen] = useState(false);
  function toggleNavWin() {
    setNavWinOpen(!navWinOpen);
  }
  return (
    <div className="home-container">
      {navWinOpen && <NavWindow closeWin={toggleNavWin} />}
      <Navigation toggleWin={toggleNavWin} />
      <About />
      <Applications />
    </div>
  );
}
