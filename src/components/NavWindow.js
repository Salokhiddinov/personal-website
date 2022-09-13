import "../styles/NavWindow.css";
export default function Window(props) {
  return (
    <div className="window">
      <div className="window-header">
        <div className="window-header-title">
          <span>Start</span>
        </div>
        <div className="window-header-controls">
          <button className="window-header-control">{""}</button>
        </div>
      </div>
      <div className="window-body">
        <p>by Nomonjon Salakhiddinov</p>
        <p>with love ❤️</p>
      </div>
    </div>
  );
}
