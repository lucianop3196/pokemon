import React from "react";
import { Link } from "react-router-dom";
import { btn } from "../../styles/Buttons.module.css";

const CreateBtn = () => {
  return (
    <div>
      <Link to="/create">
        {" "}
        <button className={btn}>Create Pokemon</button>
      </Link>
    </div>
  );
};

export default CreateBtn;
