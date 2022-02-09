import React from "react";

const Filter = ({ handleSortAlph }) => {
  return (
    <div>
      <select
        name="A-Z"
        onChange={(e) => {
          handleSortAlph(e.target.value);
        }}
      >
        <option>Orden alfabético</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
};

export default Filter;
