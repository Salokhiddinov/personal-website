import "../styles/BaseWindow.css";

export default function Window(props) {
  function closeWindow() {
    props.close();
  }
  return (
    <>
      <div className="base-window">
        <div className="window-header">
          <div className="window-header-title">
            <span>About</span>
          </div>
          <div className="window-header-controls">
            <button className="window-header-control" onClick={closeWindow}>
              {""}
            </button>
          </div>
        </div>
        <div className="window-content">{props.children}</div>
      </div>
    </>
  );
}
