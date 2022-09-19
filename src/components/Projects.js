import Window from "./Window";
import Icon from "../images/favicon.ico";
import { useState } from "react";

export default function Projects(props) {
  const [activeItem, setActiveItem] = useState("");
  function closeProjects() {
    props.closeProjects();
  }
  return (
    <>
      <Window close={closeProjects} title="Projects">
        <div className="contacts">
          <div className="contacts-list">
            <div
              className="contact-item"
              onClick={() => {
                setActiveItem("collector");
              }}
            >
              <div className="contact-icon">
                <img src={Icon} alt="collector" className="contact-icon" />
              </div>
              <div className="contact-title">
                <a
                  href="https://itransition-cw.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Collector
                </a>
              </div>
            </div>
          </div>
        </div>
        {activeItem === "" && (
          <div className="contact-description-disabled">
            <p>
              The list of my projects will be here. Click on the project to see
              one :D
            </p>
          </div>
        )}
        {activeItem === "collector" && (
          <div className="contact-description">
            <img src={Icon} alt="icon" />
            <p>
              <span className="bold">theCollector</span> is the course project
              of an Internship. <br />
              Created with: ReactJS, NodeJS, MongoDB, Love and sweat😀
            </p>
          </div>
        )}
      </Window>
    </>
  );
}
