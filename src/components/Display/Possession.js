import React from "react";

const Possession = props => {
  return (
    <div className="possession--container">
      <div className="possession--header">
        <h2 className="possession--title">{props.name}</h2>
      </div>
      <div className="possession--total">
        <h2>00</h2>
      </div>
    </div>
  );
};

export default Possession;
