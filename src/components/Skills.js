import { useState } from "react";
import Window from "./Window";
import webdev from "../images/webdev.png";
import design from "../images/design.png";
import languages from "../images/languages.png";
export default function Skills(props) {
  const [activeItem, setActiveItem] = useState("web");
  function closeSkills() {
    props.closeSkills();
  }

  return (
    <>
      <Window title="Skills" close={closeSkills}>
        <div className="skills-picker">
          <div
            className={
              activeItem === "web" ? "skill-title skill-active" : "skill-title"
            }
            onClick={() => {
              setActiveItem("web");
            }}
          >
            <img src={webdev} alt="webdev" />
            <h2>Web</h2>
          </div>

          <div
            className={
              activeItem === "design"
                ? "skill-title skill-active"
                : "skill-title"
            }
            onClick={() => {
              setActiveItem("design");
            }}
          >
            <img src={design} alt="design" />
            <h2>Design</h2>
          </div>
          <div
            className={
              activeItem === "languages"
                ? "skill-title skill-active"
                : "skill-title"
            }
            onClick={() => {
              setActiveItem("languages");
            }}
          >
            <img src={languages} alt="languages" />
            <h2>Languages</h2>
          </div>
        </div>
        <div className="skills-list">
          {activeItem === "web" && (
            <ul>
              <li className="skill-item">
                <div>
                  <span>HTML && CSS</span>
                </div>
                <div>
                  <span>⚙️⚙️⚙️⚙️⚙️⚙️</span>
                </div>
              </li>
              <li className="skill-item">
                <div>
                  <span>Javascript</span>
                </div>
                <div>
                  <span>⚙️⚙️⚙️⚙️⚙️</span>
                </div>
              </li>
              <li className="skill-item">
                <div>
                  <span>ReactJS</span>
                </div>
                <div>
                  <span>⚙️⚙️⚙️⚙️⚙️</span>
                </div>
              </li>
              <li className="skill-item">
                <div>
                  <span>VueJS</span>
                </div>
                <div>
                  <span>⚙️⚙️⚙️⚙️⚙️⚙️</span>
                </div>
              </li>
              <li className="skill-item">
                <div>
                  <span>NodeJS</span>
                </div>
                <div>
                  <span>⚙️⚙️⚙️⚙️</span>
                </div>
              </li>
            </ul>
          )}
          {activeItem === "design" && (
            <ul>
              <li className="skill-item">
                <div>
                  <span>Adobe Photoshop</span>
                </div>
                <div>
                  <span>⚙️⚙️⚙️⚙️⚙️⚙️</span>
                </div>
              </li>
              <li className="skill-item">
                <div>
                  <span>Adobe Illustrator</span>
                </div>
                <div>
                  <span>⚙️⚙️⚙️⚙️⚙️</span>
                </div>
              </li>
              <li className="skill-item">
                <div>
                  <span>Figma</span>
                </div>
                <div>
                  <span>⚙️⚙️⚙️⚙️⚙️</span>
                </div>
              </li>
            </ul>
          )}
          {activeItem === "languages" && (
            <ul>
              <li className="skill-item">
                <div>
                  <span>English</span>
                </div>
                <div>
                  <span>⚙️⚙️⚙️⚙️⚙️</span>
                </div>
              </li>
              <li className="skill-item">
                <div>
                  <span>Russian</span>
                </div>
                <div>
                  <span>⚙️⚙️⚙️⚙️⚙️⚙️</span>
                </div>
              </li>
              <li className="skill-item">
                <div>
                  <span>Uzbek</span>
                </div>
                <div>
                  <span>⚙️⚙️⚙️⚙️⚙️⚙️</span>
                </div>
              </li>
            </ul>
          )}
        </div>
      </Window>
    </>
  );
}
