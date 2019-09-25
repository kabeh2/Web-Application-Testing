import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const DisplayInnings = () => {
  /////////////////////////
  // without useContext way
  // commented out, useContext setup
  /////////////////////////
  // const appContext = useContext(AppContext);
  // const { guestInningTotal, homeInningTotal } = appContext.state;

  return (
    <AppContext.Consumer>
      {context => (
        <div className="display__innings--container">
          <h2 className="display__innings--guest">Guest</h2>
          <h2 className="display__innings--home">Home</h2>
          <div className="inning--header">
            {Object.keys(context.state.homeInningTotal).map(inning => (
              <div className="inning--title" key={inning}>
                <h4>{inning}</h4>
              </div>
            ))}
          </div>
          <div className="guest__inning--container">
            {Object.keys(context.state.guestInningTotal).map(inning => (
              <div className="guest__inning " key={inning}>
                <h2
                  style={{
                    color:
                      context.state.guestInningTotal[inning] > 0
                        ? "#fff"
                        : "crimson"
                  }}
                >
                  {context.state.guestInningTotal[inning]}
                </h2>
              </div>
            ))}
          </div>
          <div className="home__inning--container">
            {Object.keys(context.state.homeInningTotal).map(inning => (
              <div className="home__inning " key={inning}>
                <h2
                  style={{
                    color:
                      context.state.homeInningTotal[inning] > 0
                        ? "#fff"
                        : "crimson"
                  }}
                >
                  {context.state.homeInningTotal[inning]}
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default DisplayInnings;
