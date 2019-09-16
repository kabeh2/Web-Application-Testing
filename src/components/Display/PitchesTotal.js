import React from "react";

const PitchesTotal = props => {
  return (
    <div className={`pitches--container`}>
      <div className="pitches--header">
        <h2 className="pitches--title">
          Pitches<br></br>
          <span>{props.name}</span>
        </h2>
      </div>
      <div className="pitches--total">
        <h2>00</h2>
      </div>
    </div>
  );
};

export default PitchesTotal;
