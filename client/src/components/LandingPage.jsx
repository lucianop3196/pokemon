import { Link } from "react-router-dom";
import { background } from "../styles/LandingPage.module.css";

function LandingPage() {
  return (
    <div className={background}>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default LandingPage;
