import "../styles/NavWindow.css";
export default function Window(props) {
  function closeWindow() {
    props.closeWin();
  }

  return (
    <div className="window">
      <div className="window-header">
        <div className="window-header-title">
          <span>Start</span>
        </div>
        <div className="window-header-controls">
          <button className="window-header-control" onClick={closeWindow}>
            {""}
          </button>
        </div>
      </div>
      <div className="window-body">
        <h3>by Nomonjon Salakhiddinov</h3>
        <p>with love ❤️</p>
      </div>
    </div>
  );
}
