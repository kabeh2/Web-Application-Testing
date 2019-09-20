import React from "react";

const PitchesTotal = ({ name, pitchesTotal }) => {
  return (
    <div className={`pitches--container`}>
      <div className="pitches--header">
        <h2 className="pitches--title">
          Pitches<br></br>
          <span>{name}</span>
        </h2>
      </div>
      <div className="pitches--total">
        <h2>{pitchesTotal}</h2>
      </div>
    </div>
  );
};

export default PitchesTotal;
