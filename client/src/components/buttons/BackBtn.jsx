import React from "react";
import { Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <div>
      <Link to="/home">
        {" "}
        <button> Back</button>
      </Link>
    </div>
  );
};

export default BackBtn;
