import "../styles/LoadScreen.css";
import logo from "../images/logo.webp";

export default function LoadScreen() {

  return (
    <>
      1
      <div className="load-screen">
        <div className="load-screen-content">
          <div className="load-screen-logo">
            <img src={logo} alt="windows" />
          </div>
          <div className="load-screen-text">
            <span className="main-text">Portfolio</span>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-inner"></div>
          </div>
        </div>
      </div>
    </>
  );
}
