import "../styles/HomePage.modules.css";
import Navigation from "../components/Navigation";
import Applications from "../components/Applications";

export default function HomePage() {
  return (
    <div className="home-container">
      <Navigation />
      <Applications />
    </div>
  );
}
