import Window from "./Window";
import github from "../images/github-icon.png";
export default function Contacts(props) {
  return (
    <>
      <Window title="Contacts">
        <div className="contacts">
          <div className="contacts-list">
            <div className="contact-item">
              <div className="contact-icon">
                <img src={github} alt="github" className="contact-icon" />
              </div>
              <div className="contact-title">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <img src={github} alt="github" className="contact-icon" />
              </div>
              <div className="contact-title">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </Window>
    </>
  );
}
