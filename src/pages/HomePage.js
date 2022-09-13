import "../styles/HomePage.modules.css";
import NavWindow from "../components/NavWindow";
import Navigation from "../components/Navigation";
import Applications from "../components/Applications";

export default function HomePage() {
  return (
    <div className="home-container">
      <NavWindow />
      <Navigation />
      <Applications />
    </div>
  );
}
