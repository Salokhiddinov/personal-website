import Window from "./Window";
export default function Projects(props) {
  function closeProjects() {
    props.closeProjects();
  }
  return (
    <>
      <Window close={closeProjects} title="Projects">
        <div className="photo-container">
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
