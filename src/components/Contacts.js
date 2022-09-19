import { useState } from "react";
import Window from "./Window";
import github from "../images/github-icon.png";
import linkedin from "../images/linkedin-icon.png";
import gmail from "../images/gmail-icon.png";
import telegram from "../images/telegram-icon.png";
import twitter from "../images/twitter-icon.png";
import instagram from "../images/instagram-icon.png";
import phone from "../images/phone-icon.png";

export default function Contacts(props) {
  const [activeItem, setActiveItem] = useState("");
  function closeContacts() {
    props.closeContacts();
  }
  return (
    <>
      <Window title="Contacts" close={closeContacts}>
        <div className="contacts">
          <div className="contacts-list">
            <div
              className="contact-item"
              onClick={() => {
                setActiveItem("github");
              }}
            >
              <div className="contact-icon">
                <img src={github} alt="github" className="contact-icon" />
              </div>
              <div className="contact-title">
                <a
                  href="https://github.com/Salokhiddinov"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
            <div
              className="contact-item"
              onClick={() => {
                setActiveItem("linkedin");
              }}
            >
              <div className="contact-icon">
                <img src={linkedin} alt="linkedin" className="contact-icon" />
              </div>
              <div className="contact-title">
                <a
                  href="https://www.linkedin.com/in/nomonjon-salokhiddidnov-1a07261bb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </div>
            </div>
            <div
              className="contact-item"
              onClick={() => {
                setActiveItem("gmail");
              }}
            >
              <div className="contact-title">
                <img src={gmail} alt="gmail" className="contact-icon" />
                <a href="https://gmail.com" target="_blank" rel="noreferrer">
                  Gmail
                </a>
              </div>
            </div>
            <div
              className="contact-item"
              onClick={() => {
                setActiveItem("telegram");
              }}
            >
              <div className="contact-title">
                <img src={telegram} alt="telegram" className="contact-icon" />
                <a
                  href="https://t.me/salakkhiddinov"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </div>
            </div>
            <div
              className="contact-item"
              onClick={() => {
                setActiveItem("twitter");
              }}
            >
              <div className="contact-title">
                <img src={twitter} alt="twitter" className="contact-icon" />
                <a
                  href="https://twitter.com/Salakkhiddinov"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div
              className="contact-item"
              onClick={() => {
                setActiveItem("instagram");
              }}
            >
              <div className="contact-title">
                <img src={instagram} alt="instagram" className="contact-icon" />
                <a
                  href="https://www.instagram.com/salakhiddinov.n/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div
              className="contact-item"
              onClick={() => {
                setActiveItem("phone");
              }}
            >
              <div className="contact-title">
                <img src={phone} alt="phone" className="contact-icon" />
                <a href="tel:998794935" target="_blank" rel="noreferrer">
                  Phone
                </a>
              </div>
            </div>
          </div>
        </div>
        {activeItem === "" && (
          <div className="contact-description-disabled">
            <p>
              All the ways to contact me are there! Feel free to chose any :)
            </p>
          </div>
        )}
        {activeItem === "github" && (
          <div className="contact-description">
            <img src={github} alt="github" />
            <p>
              This is my a reference to my Github Profile👾. Here you can find
              my repositories with projects😀{" "}
              <a
                href="https://github.com/Salokhiddinov"
                target="_blank"
                rel="noreferrer"
              >
                Visit Github
              </a>
            </p>
          </div>
        )}
        {activeItem === "linkedin" && (
          <div className="contact-description">
            <img src={linkedin} alt="linkedin" />
            <p>
              Want to hire me? Feel free to visit my LinkedIn page🤓!{" "}
              <a
                href="https://www.linkedin.com/in/nomonjon-salokhiddidnov-1a07261bb/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Linkedin
              </a>
            </p>
          </div>
        )}
        {activeItem === "gmail" && (
          <div className="contact-description">
            <img src={gmail} alt="gmail" />
            <p>
              Here is my main e-mail address:{" "}
              <span className="bold">nomonsalakhiddinov2002@gmail.com</span>{" "}
              <br />
              <a href="https://gmail.com" target="_blank" rel="noreferrer">
                Write a mail
              </a>
            </p>
          </div>
        )}
        {activeItem === "telegram" && (
          <div className="contact-description">
            <img src={telegram} alt="telegram" />
            <p>
              The fastest way to contact me is Telegram 🚀!{" "}
              <a
                href="https://t.me/salakkhiddinov"
                target="_blank"
                rel="noreferrer"
              >
                Open chat on Telegram
              </a>
            </p>
          </div>
        )}
        {activeItem === "twitter" && (
          <div className="contact-description">
            <img src={twitter} alt="twitter" />
            <p>
              Twitter. Just Twitter. Join Please :){" "}
              <a
                href="https://twitter.com/Salakkhiddinov"
                target="_blank"
                rel="noreferrer"
              >
                Join Twitter
              </a>
            </p>
          </div>
        )}
        {activeItem === "instagram" && (
          <div className="contact-description">
            <img src={instagram} alt="instagram" />
            <p>
              All my updates and live photos/stories are placed on Instagram 📸.
              <br />
              Interested?{" "}
              <a
                href="https://www.instagram.com/salakhiddinov.n/"
                target="_blank"
                rel="noreferrer"
              >
                Follow on Instagram
              </a>
            </p>
          </div>
        )}
        {activeItem === "phone" && (
          <div className="contact-description">
            <img src={instagram} alt="instagram" />
            <p>
              Here i leave my phone number: +998 99 879 49 35
              <br />
              Please, contact if there's anything important :){" "}
            </p>
          </div>
        )}
      </Window>
    </>
  );
}
