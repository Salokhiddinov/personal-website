import Window from "./Window";
import avatar from "../images/avatar.jpg";
export default function About(props) {
  function closeAbout() {
    props.closeAbout();
  }
  return (
    <>
      <Window close={closeAbout} title="About">
        <div className="photo-container">
          <img src={avatar} alt="avatar" className="avatar" />
          <div className="photo-description">
            <h2>
              Nomonjon
              <br />
              Salokhiddinov
            </h2>
            <p>Front-end developer && Graphic designer👾</p>
            {/* <span className="photo-emoji">Front-end developer && Graphic designer👾</span> */}
          </div>
        </div>
        <p>
          Motivated web-developer, creative designer, hard-working guy with good
          sense of humour. Thats all about me🙃
          <br />
          <br />
          I'm a 19 year old student of Westminset International University in
          Tashkent. There my major is Business Information Systems. I've been
          mastering my programming & graphic design skills for past 2 years and
          got to a reasonable level.
          <br />
        </p>
      </Window>
    </>
  );
}
