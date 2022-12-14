import { useState } from "react";
import "../styles/HomePage.css";
// import CommandLine from "../components/CommandLine";
import NavWindow from "../components/NavWindow";
import Navigation from "../components/Navigation";
import Applications from "../components/Applications";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function HomePage() {
  const [navWinOpen, setNavWinOpen] = useState(false);
  const [about, setAbout] = useState(false);
  const [contacts, setContacts] = useState(false);
  const [projects, setProjects] = useState(false);
  const [skills, setSkills] = useState(false);
  function closeAllWindows() {
    setAbout(false);
    setContacts(false);
    setProjects(false);
    setSkills(false);
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
  function openProjects() {
    closeAllWindows();
    setProjects(true);
  }
  function closeProjects() {
    closeAllWindows();
    setProjects(false);
  }
  function openSkills() {
    closeAllWindows();
    setSkills(true);
  }
  function closeSkills() {
    closeAllWindows();
    setSkills(false);
  }
  return (
    <>
      {/* {showCommandLine && <CommandLine />} */}
      <div className="home-container">
        <Navigation toggleWin={toggleNavWin} />
        {navWinOpen && <NavWindow closeWin={toggleNavWin} />}
        {about && <About closeAbout={closeAbout} />}
        {contacts && (
          <Contacts toggle={openContacts} closeContacts={closeContacts} />
        )}
        {projects && (
          <Projects toggle={openProjects} closeProjects={closeProjects} />
        )}
        {skills && <Skills toggle={openSkills} closeSkills={closeSkills} />}
        <Applications
          openAbout={openAbout}
          openContacts={openContacts}
          openProjects={openProjects}
          openSkills={openSkills}
        />
      </div>
    </>
  );
}
