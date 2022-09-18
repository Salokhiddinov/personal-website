import { useState } from "react";
// import "../styles/HomePage.modules.css";
import NavWindow from "../components/NavWindow";
import Navigation from "../components/Navigation";
import Applications from "../components/Applications";
import About from "../components/About";
import Contacts from "../components/Contacts";

export default function HomePage() {
  const [navWinOpen, setNavWinOpen] = useState(false);
  const [about, setAbout] = useState(false);
  const [contacts, setContacts] = useState(false);
  function closeAllWindows() {
    setAbout(false);
    setContacts(false);
  }
  function toggleNavWin() {
    setNavWinOpen(!navWinOpen);
  }
  function openAbout() {
    closeAllWindows();
    setAbout(true);
  }
  function closeAbout() {
    closeAllWindows();
    setAbout(false);
  }
  function openContacts() {
    closeAllWindows();
    setContacts(true);
  }
  function closeContacts() {
    closeAllWindows();
    setContacts(false);
  }
  return (
    <div className="home-container">
      <Navigation toggleWin={toggleNavWin} />
      {navWinOpen && <NavWindow closeWin={toggleNavWin} />}
      {about && <About closeAbout={closeAbout} />}
      {contacts && (
        <Contacts toggle={openContacts} closeContacts={closeContacts} />
      )}
      <Applications openAbout={openAbout} openContacts={openContacts} />
    </div>
  );
}
