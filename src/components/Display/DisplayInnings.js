import React from "react";

const DisplayInnings = ({ guestInningTotal, homeInningTotal }) => {
  return (
    <div className="display__innings--container">
      <h2 className="display__innings--guest">Guest</h2>
      <h2 className="display__innings--home">Home</h2>
      <div className="inning--header">
        {Object.keys(homeInningTotal).map(inning => (
          <div className="inning--title" key={inning}>
            <h4>{inning}</h4>
          </div>
        ))}
      </div>
      <div className="guest__inning--container">
        {Object.keys(guestInningTotal).map(inning => (
          <div className="guest__inning " key={inning}>
            <h2
              style={{
                color: guestInningTotal[inning] > 0 ? "#fff" : "crimson"
              }}
            >
              {guestInningTotal[inning]}
            </h2>
          </div>
        ))}
      </div>
      <div className="home__inning--container">
        {Object.keys(homeInningTotal).map(inning => (
          <div className="home__inning " key={inning}>
            <h2
              style={{
                color: homeInningTotal[inning] > 0 ? "#fff" : "crimson"
              }}
            >
              {homeInningTotal[inning]}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayInnings;
