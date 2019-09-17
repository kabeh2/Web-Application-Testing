import React from "react";

const Possession = ({ name, count }) => {
  return (
    <div className="possession--container">
      <div className="possession--header">
        <h2 className="possession--title">{name}</h2>
      </div>
      <div className="possession--total">
        <h2>{count}</h2>
      </div>
    </div>
  );
};

export default Possession;
