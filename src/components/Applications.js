import "../styles/Applications.css";
import about from "../images/about.png";
import contacts from "../images/contacts.png";
import projects from "../images/projects.png";

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
      </div>
    </>
  );
}
