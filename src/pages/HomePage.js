import { useState } from "react";
// import "../styles/HomePage.modules.css";
import NavWindow from "../components/NavWindow";
import Navigation from "../components/Navigation";
import Applications from "../components/Applications";
import About from "../components/About";

export default function HomePage() {
  const [navWinOpen, setNavWinOpen] = useState(false);
  const [about, setAbout] = useState(false);
  function toggleNavWin() {
    setNavWinOpen(!navWinOpen);
  }
  function openAbout() {
    setAbout(true);
  }
  function closeAbout() {
    setAbout(false);
  }
  return (
    <div className="home-container">
      <Navigation toggleWin={toggleNavWin} />
      {navWinOpen && <NavWindow closeWin={toggleNavWin} />}
      {about && <About toggleAbout={closeAbout} />}
      <Applications openAbout={openAbout} closeAbout={closeAbout} />
    </div>
  );
}
