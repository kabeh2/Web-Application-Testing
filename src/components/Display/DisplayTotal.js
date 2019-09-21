import React from "react";
import AppContext from "../../context/AppContext";

const DisplayTotal = () => {
  return (
    /////////////////////////
    // without useContext way
    /////////////////////////

    <AppContext.Consumer>
      {context => (
        <div className="total__score--container">
          <div className="total__score--header">
            <h4 className="total__score--title">Total</h4>
          </div>
          <div className="total__score--guest">
            <h2>{`G: ${context.state.guestScore}`}</h2>
          </div>
          <div className="total__score--home">
            <h2>{`H: ${context.state.homeScore}`}</h2>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default DisplayTotal;
