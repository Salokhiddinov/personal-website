import "../styles/Applications.css";
import about from "../images/about.png";
import contacts from "../images/contacts.png";
import projects from "../images/projects.png";
import skills from "../images/skills.png";
import settings from "../images/settings.png";

const element = document.getElementById("root");
const fullscreen = localStorage.getItem("fullscreen");

export default function Applications(props) {
  function openAbout() {
    props.openAbout();
  }
  function openContacts() {
    props.openContacts();
  }
  function openProjects() {
    props.openProjects();
  }
  function openSkills() {
    props.openSkills();
  }
  function goFullScreen() {
    console.log(fullscreen, typeof fullscreen);

    if (fullscreen === "false") {
      element.requestFullscreen().then(() => {
        localStorage.setItem("fullscreen", true);
      });
    }
    if (fullscreen === "true") {
      document.webkitExitFullscreen();
      localStorage.setItem("fullscreen", false);
    }

    // if (localStorage.getItem("fullscreen") === false) {
    //   });
    //   console.log(localStorage.getItem("fullscreen"));
    // } else if (localStorage.getItem("fullscreen") === true) {
    //   document.webkitExitFullscreen();
    //   localStorage.setItem("fullscreen", false);
    // }
  }

  return (
    <>
      <div className="applications">
        <div className="application-item" onClick={openAbout}>
          <img src={about} alt="about" className="applicaion-icon" />
          <span className="application-title">About</span>
        </div>
        <div className="application-item" onClick={openContacts}>
          <img src={contacts} alt="contacts" className="applicaion-icon" />
          <span className="application-title">Contacts</span>
        </div>
        <div className="application-item" onClick={openProjects}>
          <img src={projects} alt="projects" className="applicaion-icon" />
          <span className="application-title">Projects</span>
        </div>
        <div className="application-item" onClick={openSkills}>
          <img src={skills} alt="skills" className="applicaion-icon" />
          <span className="application-title">Skills</span>
        </div>
        <div className="application-item" onClick={goFullScreen}>
          <img src={settings} alt="settings" className="applicaion-icon" />
          <span className="application-title">Settings</span>
        </div>
      </div>
    </>
  );
}
