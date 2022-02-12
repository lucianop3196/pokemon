import { Link } from "react-router-dom";
import { background, homeBtn } from "../styles/LandingPage.module.css";

function LandingPage() {
  return (
    <div className={background}>
      
      <Link to="/home">
      <div className={homeBtn}></div>
      </Link>
    </div>
  );
}

export default LandingPage;
