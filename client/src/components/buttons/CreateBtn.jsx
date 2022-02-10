import React from "react";
import { Link } from "react-router-dom";

const CreateBtn = () => {
  return (
    <div>
      <Link to="/create">
        {" "}
        <button>Create Pokemon</button>
      </Link>
    </div>
  );
};

export default CreateBtn;
