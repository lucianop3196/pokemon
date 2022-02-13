import React from "react";
import { Link } from "react-router-dom";
import { btn } from "../../styles/Buttons.module.css";

const BackBtn = () => {
  return (
    <div>
      <Link to="/home">
        {" "}
        <button className={btn}> Back</button>
      </Link>
    </div>
  );
};

export default BackBtn;
