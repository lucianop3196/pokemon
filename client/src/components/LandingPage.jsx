import { Link } from "react-router-dom";
import { background, homeBtn, home_span } from "../styles/LandingPage.module.css";

function LandingPage() {
  return (
    <div className={background}>
      <Link to="/home">
        <div className={homeBtn}></div>
        <span className={home_span}>Home</span>
      </Link>
    </div>
  );
}

export default LandingPage;
