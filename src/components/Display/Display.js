import React from "react";
import "./Display.scss";
import DisplayInnings from "./DisplayInnings";
import DisplayTotal from "./DisplayTotal";
import PitchesTotal from "./PitchesTotal";
import Possession from "./Possession";

const Display = ({ ball, strike, outs, pitchesGuest, pitchesHome }) => {
  return (
    <div className="display__container">
      {/* Pass State with Context for the 2 below */}
      <DisplayInnings />
      <DisplayTotal />
      <div className="pitches-home--container right">
        <PitchesTotal
          name="Home"
          borderSide="right"
          pitchesTotal={pitchesHome}
        />
      </div>
      <div className="possession-wrapper">
        <div className="possession--ball">
          <Possession name="Ball" count={ball} />
        </div>
        <div className="possession--strike">
          <Possession name="Strike" count={strike} />
        </div>
        <div className="possession--out">
          <Possession name="Out" count={outs} />
        </div>
      </div>
      <div className="pitches-away--container left">
        <PitchesTotal
          name="Guest"
          borderSide="left"
          pitchesTotal={pitchesGuest}
        />
      </div>
    </div>
  );
};

export default Display;
