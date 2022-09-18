import "../styles/Applications.css";
import about from "../images/about.png";
export default function Applications(props) {
  function openAbout() {
    props.openAbout();
  }
  return (
    <>
      <div className="applications">
        <div className="application-item" onDoubleClick={openAbout}>
          <img src={about} alt="about" className="applicaion-icon" />
          <span className="application-title">About</span>
        </div>
        
      </div>
    </>
  );
}
