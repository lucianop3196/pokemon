import React from "react";

const Sort = ({ handleSort, sortDescription}) => {

  return (
    <div>
      <select
        name="sortAlph"
        onChange={(e) => {
          handleSort(e.target.value);
        }}
      >
        <option value="default">{sortDescription}</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  );
};

export default Sort;
