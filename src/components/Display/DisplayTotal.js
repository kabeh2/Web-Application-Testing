import React from "react";

const DisplayTotal = ({ guestScore, homeScore }) => {
  return (
    <div className="total__score--container">
      <div className="total__score--header">
        <h4 className="total__score--title">Total</h4>
      </div>
      <div className="total__score--guest">
        <h2>{guestScore}</h2>
      </div>
      <div className="total__score--home">
        <h2>{homeScore}</h2>
      </div>
    </div>
  );
};

export default DisplayTotal;
