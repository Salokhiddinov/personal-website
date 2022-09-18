import Window from "./Window";
import avatar from "../images/avatar.jpg";
export default function About(props) {
  function closeAbout() {
    props.closeAbout();
  }
  return (
    <>
      <Window close={closeAbout}>
        <div className="photo-container">
          <img src={avatar} alt="avatar" className="avatar" />
          <div className="photo-description">
            <h2>
              Nomonjon
              <br />
              Salokhiddinov
            </h2>
            <span className="photo-emoji">👾</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          similique molestiae, perspiciatis dolores sit mollitia, minima
          sapiente quasi maiores cum eos repellendus natus ut maxime error illo
          quisquam obcaecati id!
        </p>
      </Window>
    </>
  );
}
