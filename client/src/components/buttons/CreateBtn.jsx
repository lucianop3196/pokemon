import React from "react";
import { Link } from "react-router-dom";
import { createBtn } from "../../styles/Buttons.module.css";

const CreateBtn = () => {
  return (
    <div>
      <Link to="/create">
        {" "}
        <button className={createBtn}>Create Pokemon</button>
      </Link>
    </div>
  );
};

export default CreateBtn;
