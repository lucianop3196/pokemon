import React from "react";


const Filters = ({types, defaultDescription, handleFilter}) => {
  

  return (
    <div>
      {" "}
      <select name={{defaultDescription}} onChange={(e)=> handleFilter(e.target.value)}>
        <option value="default">
          {defaultDescription}
        </option>
        {types?.map((type)=>{
            return <option key={type.id} value={type.name}>{type.name}</option>
        })}
      </select>
    </div>
  );
};

export default Filters;
